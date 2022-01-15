import { endWith, flatMap, interval, of, takeUntil, takeWhile, timer } from 'rxjs';
import { filter } from 'rxjs/operators';

const parent = {
  child: undefined
};

setTimeout(() => parent.child = { some: 'value' }, 1000);

console.time('asd');

// In RxJs

function waitWhileViewChildIsReady(parent, child, maxWaitTime = 3000, refreshRateSec = 100) {
  return interval(refreshRateSec)
    .pipe(
      takeWhile(() => !parent[child]),
      filter(x => x === undefined),
      takeUntil(timer(maxWaitTime)),// TODO (S.Panfilov) takeUntil might produce memory leak here, better put it to the very end
      endWith(parent[child]),
      flatMap(v => {
        if (!parent[child]) throw new Error(`Children "${child}" is never ready`);
        return of(!parent[child]);
      })
    );
}

waitWhileViewChildIsReady(parent, 'child').subscribe(res => {
  console.log(parent.child);
  if (parent.child) console.timeEnd('asd');
});
