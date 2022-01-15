import { combineLatest, distinctUntilChanged, Subject } from 'rxjs';

//Case: we want to trigger subscribe only on updates of subjB$ (but with the latest subjA$)

const subjA$ = new Subject(); // helper
const subjB$ = new Subject(); // main thing to watch 

combineLatest([subjA$, subjB$])
  .pipe(
    distinctUntilChanged(([aPrev, bPrev], [aCurr, bCurr]) => bPrev === bCurr )
  )
  .subscribe(console.log);

subjA$.next('a1')
subjA$.next('a2')
subjB$.next('b1')
subjA$.next('a3')
subjB$.next('b2')