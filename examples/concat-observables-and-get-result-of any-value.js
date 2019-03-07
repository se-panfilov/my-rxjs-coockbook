const {of, Subject, forkJoin, zip, merge} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take} = require('rxjs/operators')

// Case:
// Get two observables and get final value based on ANY value

forkJoin(of(1), of(1), of(1), of(1), of(1), of(1), of(1), of(1))
  .pipe(
    map(arr => arr.some(v => v === 2)) // true if ANY values is 2
  )
  .subscribe(v =>
    console.log(v)
  )