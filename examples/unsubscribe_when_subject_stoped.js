const { Subject, BehaviorSubject } = require('rxjs');
const { filter, takeUntil, finalize, take, map } = require('rxjs/operators');

// Case: we want to unsubscribe child$ when parent$ is complete

const parent$ = new Subject();
const child$ = new BehaviorSubject({ value: 'initial_value' });

// prepare
let value = 0;
const interval = setInterval(() => {
  if (value === 400) parent$.complete();
  if (value === 800) clearInterval(interval);

  value += 100;
  parent$.next(value);
}, 100);

parent$
  .pipe(finalize(() => child$.complete()))
  .subscribe((state) => child$.next(state));

child$
  .pipe(finalize(() => console.log('child finalized')))
  .subscribe(console.log);
