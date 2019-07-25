const {of, from, Subject, forkJoin, zip, merge} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take} = require('rxjs/operators')

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