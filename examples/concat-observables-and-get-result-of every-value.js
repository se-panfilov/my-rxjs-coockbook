import { every, from, map, merge, of } from 'rxjs';

// Case:
// Get two observables and get final value based on All values

merge(of(1), of(1))
  .pipe(
    every(v => v === 1) // true if ALL values are 1
  )
  .subscribe(console.log)

// Case 2:
// Get the  result based on array
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