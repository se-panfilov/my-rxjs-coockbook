const {of, Subject, forkJoin, zip, merge, combineLatest} = require('rxjs')
const {delay, takeUntil, flatMap, map, switchMap, every, take, tap, reduce} = require('rxjs/operators')

// Case:
// Get two observables and get final value based on ANY value

combineLatest(of(true), of(false), of(true))
  .pipe(
    map(arr => arr.some(v => v === false)) // true if ANY values is false
  )
  .subscribe(console.log)