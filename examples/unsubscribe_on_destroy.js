const {of, Subject, interval, merge} = require('rxjs')
const {delay, take, map, takeUntil} = require('rxjs/operators')

// Case:
// QQQQ

const unsubscribe = new Subject();

function printFoo() {
  interval(100)
    .pipe(
      take(1),
      map(() => 'foo'),
      takeUntil(unsubscribe)
    )
    .subscribe(console.log)
}

function onDestroy() {
  unsubscribe.next();
  unsubscribe.complete();
}

printFoo()
onDestroy()
