import { distinctUntilChanged, from } from 'rxjs';

//simple case
// const source$ = from([1, 1, 2, 2, 3, 3]);
//
// source$
//   .pipe(distinctUntilChanged())
//   // output: 1,2,3
//   .subscribe(console.log);
//
// const sampleObject = { name: 'Test' };
// Objects

const source$ = from([
  {a: 1, b: 2},
  {a: 1, b: 2},
  {a: 2, b: 2}
]);

source$
  .pipe(distinctUntilChanged((prev, curr) => prev.a === curr.a))
  .subscribe(console.log);

