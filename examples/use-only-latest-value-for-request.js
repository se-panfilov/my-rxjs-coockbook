import { delay, of, Subject, switchMap, tap } from 'rxjs';
// Async input, but we wait for the latest value

const userInputSubj = new Subject();

// Subscribe for user input
userInputSubj
  .pipe(
    tap(v => console.log('user input: ', v)), // output user's input
    // flatMap(v => makeQuery(v)) // this will produce request in the same order as input was done
    switchMap(v => makeQuery(v)) // this will make request only for last input
  )
  .subscribe(val => {
    console.log('request:', val)
  })

// User add some values in "runtime"
setTimeout(() => userInputSubj.next('John'), 800)
setTimeout(() => userInputSubj.next('John "Bones"'), 1600)
setTimeout(() => userInputSubj.next('John "Bones" Johns'), 2400)


//Simulate http request here
function makeQuery(value) {
  const due = (value === 'John') ? 3000 : 880
  return of(value).pipe(delay(due))
}