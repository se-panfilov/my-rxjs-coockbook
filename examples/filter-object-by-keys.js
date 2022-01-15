import { map, of } from 'rxjs';

// Case 1:
// Filter object by array of keys to exclude (here open letters are allowed, consonant letters are not)

const keysToExclude = ['b', 'c', 'd', 'g']

const source$ = of({
  a: 'yes',
  b: 'no',
  c: 'no',
  d: 'no',
  e: 'yes',
  g: 'no',
})

source$
  .pipe(
    map(obj => omit(keysToExclude)(obj))
  )
  .subscribe(console.log)


// Case 2:
// Filter object by array of keys to include(here open letters are allowed, consonant letters are not)

const allowedKeys = ['a', 'e']

source$
  .pipe(
    map(obj => omitBut(allowedKeys)(obj))
  )
  .subscribe(console.log)

////// Helper functions ////// ////// ////// ////// ////// ////// ////// ////// ////// ////// 

function omit(keysToExcludeArr) {
  return (o) =>
    Object.keys(o).reduce((acc, key) => {
      if (keysToExcludeArr.includes(key)) {
        return acc;
      }
      acc[key] = o[key];

      return acc;
    }, {});
}

function omitBut(keysToSaveArr) {
  return (o) =>
    Object.keys(o).reduce((acc, key) => {
      if (!keysToSaveArr.includes(key)) {
        return acc;
      }
      acc[key] = o[key];

      return acc;
    }, {});
}

