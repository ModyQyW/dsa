/* eslint-disable import/prefer-default-export */
import { isArray, isFunction, cloneDeep } from 'lodash-es';

export function bubbleSort<T>(array: T[], compareFn: (a: T, b: T) => number) {
  if (!isArray(array)) {
    throw new Error('You should pass a array as the first param.');
  }
  if (!isFunction(compareFn)) {
    throw new Error(
      'You should pass a function as the second param, which accepts two params and returns a number.',
    );
  }
  const newArray = cloneDeep(array);
  // outer loop, loop times
  for (let i = 0, { length } = newArray; i < length; i += 1) {
    let isSwapped = false;
    // inner loop, move the smaller/larger elements to the end
    for (let j = 0, boundary = length - 1 - i; j < boundary; j += 1) {
      if (compareFn(newArray[j], newArray[j + 1]) > 0) {
        isSwapped = true;
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
    // end when there are no swaps
    if (!isSwapped) {
      break;
    }
  }
  return newArray;
}
