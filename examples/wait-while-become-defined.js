const parent = {
  child: undefined
};

setTimeout(() => parent.child = {some: 'value'}, 1000)

console.time('asd')

// In RxJs
const {endWith, takeUntil, takeWhile, filter} = require('rxjs/operators')
const {flatMap} = require('rxjs/internal/operators')
const {timer, interval, of} = require('rxjs')

function waitWhileViewChildIsReady(parent, child, maxWaitTime = 3000, refreshRateSec = 100) {
  return interval(refreshRateSec)
    .pipe(
      takeWhile(() => !parent[child]),
      filter(x => x === undefined),
      takeUntil(timer(maxWaitTime)),// TODO (S.Panfilov) takeUntil might produce memory leak here, better put it to the very end
      endWith(parent[child]),
      flatMap(v => {
        if (!parent[child]) throw new Error(`Children "${child}" is never ready`);
        return of(!parent[child])
      })
    )
}

waitWhileViewChildIsReady(parent, 'child').subscribe(res => {
  console.log(parent.child);
  if (parent.child) console.timeEnd('asd')
});
