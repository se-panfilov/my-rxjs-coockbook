const { BehaviorSubject, combineLatest } = require('rxjs');
const { filter } = require('rxjs/operators');
const sprite$ = new BehaviorSubject(undefined);
const position$ = new BehaviorSubject({ x: 0, y: 0 });

//Case: should get position updates only when sprite became defined 

combineLatest(sprite$, position$)
  .pipe(
    filter(([sprite, position]) => !!sprite)
  )
  .subscribe(console.log);

position$.next({ x: 1, y: 2 });
sprite$.next({ id: 'some sprite' });
position$.next({ x: 3, y: 4 });
position$.next({ x: 5, y: 6 });
position$.next({ x: 7, y: 8 });
sprite$.next({ id: 'some sprite 2' });
position$.next({ x: 9, y: 10 });

