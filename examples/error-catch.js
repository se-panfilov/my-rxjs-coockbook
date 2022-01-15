import { catchError, throwError } from 'rxjs';

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