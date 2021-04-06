/* eslint-disable import/prefer-default-export */
import { isArray, isFunction, cloneDeep } from 'lodash-es';

function sort<T = any>(array: T[], compareFn: (a: T, b: T) => -1 | 0 | 1) {
  const { length } = array;
  if (length < 2) {
    return array;
  }
  const base = array[0];
  const array1: T[] = [];
  const array2: T[] = [];
  for (let i = 1; i < length; i += 1) {
    if (compareFn(array[i], base) === 1) {
      array2.push(array[i]);
    } else {
      array1.push(array[i]);
    }
  }
  return [...sort(array1, compareFn), base, ...sort(array2, compareFn)];
}

export function quickSort<T>(
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
  return sort(newArray, compareFn);
}
