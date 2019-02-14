const {Subject} = require('rxjs');
const {last} = require('rxjs/operators');

//Get only very last value

const subj = new Subject()

subj.asObservable()
  .pipe(last())
  .subscribe(res => {
    console.log(res)
  })


subj.next(true)
subj.next(false)
subj.next(true)
subj.complete()