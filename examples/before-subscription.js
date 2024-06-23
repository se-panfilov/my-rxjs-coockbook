import { Subject, tap } from 'rxjs';

const beforeAction$ = new Subject();
const action$ = new Subject();

action$.subscribe((event) => console.log(event + ': A'));

let iteration = 0;

action$.subscribe((event) => console.log(event + ': B'));

//Case: execute an action before the subscription
beforeAction$.pipe(
  tap(() => iteration++),
).subscribe(() => {
  action$.next(`action "${iteration}"`);
});

beforeAction$.next();

action$.subscribe((event) => console.log(event + ': C'));

beforeAction$.next();
beforeAction$.next();

action$.subscribe((event) => console.log(event + ': D'));

beforeAction$.next();