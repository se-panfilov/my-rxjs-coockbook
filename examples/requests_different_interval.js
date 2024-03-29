import { interval, map, merge, take } from 'rxjs';


// Case:
// Tho observables that send the values after different period

const makeLongRequest = () => interval(300).pipe(take(1), map(v => 'long'));
const makeQuickRequest = () => interval(100).pipe(take(1), map(v => 'quick'));

merge(
  makeLongRequest(), makeQuickRequest()
)
  .subscribe(console.log)

