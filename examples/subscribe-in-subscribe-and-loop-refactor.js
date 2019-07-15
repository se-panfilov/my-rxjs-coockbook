const {of, Subject, forkJoin, zip, merge, throwError, combineLatest} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take, tap, catchError, mergeMap} = require('rxjs/operators')

function mainEmitter() {
  return of([{id: 'aaa', url: '/aaa'}, {id: 'bbb', url: '/bbb'}, {id: 'ccc', url: '/ccc'}])
}

function requestEmitter(url) {
  return of(url + '1')
}


mainEmitter()
  .pipe(
    mergeMap((arr) => {
      return forkJoin(arr.map(item => requestEmitter(item.url)))
    })
  )
  .subscribe(result => console.log(result))