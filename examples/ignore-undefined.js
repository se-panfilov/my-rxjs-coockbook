import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

//ignore undefined

of(...[1, 2, 3, undefined, 5])
  .pipe(
    filter((v) => v !== undefined)
    // tap(v => console.log('tap: ', v))
  )
  .subscribe(res => {
    console.log('result: ', res)
  })