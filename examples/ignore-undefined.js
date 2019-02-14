const {of} = require('rxjs');
const {filter} = require('rxjs/operators')

//ignore undefined

of(...[1, 2, 3, undefined, 5])
  .pipe(
    filter((v) => v !== undefined)
  )
  .subscribe(res => {
    console.log('result: ', res)
  })