import { flatMap, of } from 'rxjs';

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