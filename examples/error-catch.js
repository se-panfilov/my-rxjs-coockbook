const {of, Subject, forkJoin, zip, merge, throwError} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take, tap, catchError} = require('rxjs/operators')

function mainEmiter() {
  return throwError('Main Error')
}


mainEmiter()
  .pipe(
    catchError(errorResponse => {
      console.log('catch')
      return throwError(errorResponse);
    }),
  )
  .subscribe(val => {
    console.info('subscr');
  })