const {of, Subject} = require('rxjs')
const {delay, takeUntil} = require('rxjs/operators')

// Case:
// Wend several http calls in an order, one after another one
// But the last one call executes ended first, and a call from the middle - ended last

const cancelRequest = new Subject();

function getData(value) {
  cancelRequest.next(); // kill prev request

  someHttpService.makeCall(value)
    .pipe(
      takeUntil(cancelRequest)
    )
    .subscribe(val => {
      console.log('request:', val)
    })
}

const someHttpService = {
  makeCall: (value) => {
    const due = (value === 'John') ? 3000 : 880
    return of(value).pipe(delay(due))
  }
}

// User add some values in "runtime"
setTimeout(() => getData('John'), 800)
setTimeout(() => getData('John "Bones"'), 1600)
setTimeout(() => getData('John "Bones" Johns'), 2400)