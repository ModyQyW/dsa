/* eslint-disable import/prefer-default-export */
import { isArray, isFunction, cloneDeep } from 'lodash-es';

export function shakerSort<T = any>(
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
  let left = 0;
  let right = newArray.length - 1;
  let tmp = left;
  let isSwapped = false;
  while (left < right) {
    // move the smaller/larger elements to the end
    for (let i = left; i < right; i += 1) {
      if (compareFn(newArray[i], newArray[i + 1]) === 1) {
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
        tmp = i;
        isSwapped = true;
      }
    }
    // set right, the position of the smallest/largest element
    right = tmp;
    // move the larger/smaller elements to the start
    for (let i = right - 1; i >= left; i -= 1) {
      if (compareFn(newArray[i], newArray[i + 1]) === 1) {
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
        tmp = i + 1;
        isSwapped = true;
      }
    }
    // set left, the position of the largest/smallest element
    left = tmp;
    // end when there are no swaps
    if (!isSwapped) {
      break;
    }
  }
  return newArray;
}
