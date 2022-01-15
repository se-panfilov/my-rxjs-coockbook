import { combineLatest, map, of } from 'rxjs';

// Case:
// Get two observables and get final value based on ANY value

combineLatest([of(true), of(false), of(true)])
  .pipe(
    map(arr => arr.some(v => v === false)) // true if ANY values is false
  )
  .subscribe(console.log)