const {of, Subject, forkJoin, zip, merge, throwError} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take, tap, catchError} = require('rxjs/operators')

function mainEmitter() {
  return throwError('Main Error')
}


mainEmitter()
  .pipe(
    catchError(errorResponse => {
      console.log('catch')
      return throwError(errorResponse);
    }),
  )
  .subscribe(val => {
    console.info('subscr');
  })