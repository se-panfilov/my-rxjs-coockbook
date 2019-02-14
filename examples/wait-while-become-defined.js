const parent = {
  child: undefined
};

setTimeout(() => parent.child = {some: 'value'}, 1000)

console.time('asd')

// In RxJs
const {endWith, takeUntil, takeWhile, filter} = require('rxjs/operators')
const {flatMap} = require('rxjs/internal/operators')
const {timer, interval, of} = require('rxjs')

function waitWhiteViewChildIsReady(parent, child, maxWaitTime = 3000, refreshRateSec = 100) {
  return interval(refreshRateSec)
    .pipe(
      takeWhile(() => !parent[child]),
      filter(x => x === undefined),
      takeUntil(timer(maxWaitTime)),
      endWith(parent[child]),
      flatMap(v => {
        if (!parent[child]) throw new Error(`Children "${child}" is never ready`);
        return of(!parent[child])
      })
    )
}

waitWhiteViewChildIsReady(parent, 'child').subscribe(res => {
  console.log(parent.child);
  if (parent.child) console.timeEnd('asd')
});