import { interval, map, Subject, take, takeUntil } from 'rxjs';

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
