const {of, Subject, forkJoin, zip, merge, throwError} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take, tap, catchError} = require('rxjs/operators')

function mainEmmiter() {
  return throwError('Main Error')
}


mainEmmiter()
  .pipe(
    catchError(errorResponse => {
      console.log('catch')
      return throwError(errorResponse);
    }),
    tap(console.log)
  )
  .subscribe(val => {
    console.info('subscr');
  })