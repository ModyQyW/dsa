/* eslint-disable import/prefer-default-export */
import { isArray, isFunction, cloneDeep } from 'lodash-es';

export function selectionSort<T = any>(
  array: T[],
  compareFn: (a: T, b: T) => -1 | 0 | 1,
) {
  if (!isArray(array)) {
    throw new Error('You should pass a array as the first param.');
  }
  if (!isFunction(compareFn)) {
    throw new Error(
      'You should pass a function as the second param, which accepts two params and returns -1, 0 or 1.',
    );
  }
  const newArray = cloneDeep(array);
  let index = 0;
  // outer loop, loop times
  for (let i = 0, { length } = newArray; i < length; i += 1) {
    index = i;
    // inner loop, move the smaller/larger elements to the start
    for (let j = i + 1; j < length; j += 1) {
      if (compareFn(newArray[index], newArray[j]) === 1) {
        index = j;
      }
    }
    if (index !== i) {
      [newArray[i], newArray[index]] = [newArray[index], newArray[i]];
    }
  }
  return newArray;
}
