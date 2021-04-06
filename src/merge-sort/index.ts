/* eslint-disable import/prefer-default-export */
import { isArray, isFunction, cloneDeep } from 'lodash-es';

function merge<T = any>(
  array1: T[],
  array2: T[],
  compareFn: (a: T, b: T) => -1 | 0 | 1,
) {
  const array: T[] = [];
  while (array1.length > 0 && array2.length > 0) {
    if (compareFn(array1[0], array2[0]) === 1) {
      array.push(array2.shift() as T);
    } else {
      array.push(array1.shift() as T);
    }
  }
  if (array1.length) {
    array.push(...array1);
  } else {
    array.push(...array2);
  }
  return array;
}

function sort<T = any>(array: T[], compareFn: (a: T, b: T) => -1 | 0 | 1) {
  const { length } = array;
  if (length < 2) {
    return array;
  }
  const halfLength = parseInt((length / 2).toFixed(0), 10);
  return merge(
    sort(array.slice(0, halfLength), compareFn),
    sort(array.slice(halfLength), compareFn),
    compareFn,
  );
}

export function mergeSort<T = any>(
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
