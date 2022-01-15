import { forkJoin, map, of } from 'rxjs';

const five = of(5)
const six = of(6)
const seven = of(7)

function forkJoinObj(obj) {
  const keys = Object.keys(obj)
  const values = Object.values(obj)

  return forkJoin(values).pipe(map(result => result.reduce((acc, next, index) => {
    acc[keys[index]] = next
    return acc
  }, {})));
}

forkJoinObj({five, six, seven}).subscribe(result => {
  console.info(result)
})