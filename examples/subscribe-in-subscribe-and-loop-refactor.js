const {of, Subject, forkJoin, zip, merge, throwError, combineLatest} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take, tap, catchError, mergeMap} = require('rxjs/operators')

function mainEmiter() {
  return of([{id: 'aaa', url: '/aaa'}, {id: 'bbb', url: '/bbb'}, {id: 'ccc', url: '/ccc'}])
}

function requestEmiter(url) {
  return of(url + '1')
}


mainEmiter()
  .pipe(
    mergeMap((arr) => {
      return forkJoin(arr.map(item => requestEmiter(item.url)))
    })
  )
  .subscribe(result => console.log(result))