import { every, from, map, merge, of, Subject } from 'rxjs';

// Case:
// Get two observables and get final value based on All values

merge(of(1), of(1))
  .pipe(
    every(v => v === 1) // true if ALL values are 1
  )
  .subscribe(console.log)

// Case 2:
// Get the result based on array
from([1, 2, 3, 4, 5])
  .pipe(
    every(v => v === 1)
  )
  .subscribe(console.log)


// Case 3:
// Get the  result based on array
const arr2 = ['a', 'd'];
of(['a', 'b', 'c'])
  .pipe(
    map(list => list.every(v => arr2.includes(v)))
  )
  .subscribe(console.log)

// Case 4: get every value from two observables
const subj1 = new Subject();
const subj2 = new Subject();

merge(subj1, subj2).subscribe(value => console.log(value));

subj1.next('1a');
subj2.next('1b');
subj1.next('2a');
subj2.next('2b');
setTimeout(() => {
  subj1.next('4a');
  subj1.complete();
}, 5);
subj1.next('3a');
subj2.next('3b');
subj2.next('4b');

subj2.complete();

