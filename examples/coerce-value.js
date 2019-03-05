const {of, Subject} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap} = require('rxjs/operators')

// Case:
// QQQQQQQQQQQQ

of(...[1, 2, 3, 4, 5])
  .pipe(
    flatMap(v => of(v > 2))
    // switchMap(v => of(v > 2)) // also possible
    // map(v => v > 2) // also possible
  )
  .subscribe(v =>
    console.log(v)
  )