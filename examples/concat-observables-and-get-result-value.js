const {of, Subject, forkJoin, zip, merge} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take} = require('rxjs/operators')

// Case:
// Get two observables and get final value based on all values

merge(of(1), of(1))
  .pipe(
    every(v => {
      return v === 1
    })
  )
  .subscribe(v =>
    console.log(v)
  )