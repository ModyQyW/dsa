/* eslint-disable no-continue, import/prefer-default-export */
import { isFunction, isNumber } from 'lodash-es';

// TODO: refactor with heap
export class PriorityQueue<T = any> {
  priorityQueue: T[];

  compareFn: null | ((a: T, b: T) => 0 | -1 | 1);

  constructor(compareFn?: (a: T, b: T) => 0 | -1 | 1) {
    this.priorityQueue = [];
    this.compareFn = null;
    if (isFunction(compareFn)) {
      this.compareFn = compareFn;
    } else if (compareFn !== undefined) {
      throw new Error(
        'You should pass a function as the only param, which accepts two params and returns -1, 0 or 1.',
      );
    }
  }

  /** Get the size of the priority queue */
  getSize() {
    return this.priorityQueue.length;
  }

  /** Check if the priority queue is empty */
  isEmpty() {
    return this.getSize() === 0;
  }

  /** Get the first element */
  getFirst() {
    return this.isEmpty() ? null : this.priorityQueue[0];
  }

  /** get the last element */
  getLast() {
    return this.isEmpty() ? null : this.priorityQueue[this.getSize() - 1];
  }

  /** push the element into the priority queue */
  push(...rest: T[]) {
    if (rest.length === 0) {
      throw new Error('You need to provide an element.');
    }
    rest.forEach((item) => {
      this.priorityQueue.push(item);
    });
    if (this.compareFn !== null) {
      this.priorityQueue.sort(this.compareFn);
    }
  }

  /** pop the first element from the priority queue */
  pop(number?: number) {
    if (number === undefined) {
      this.priorityQueue.shift();
    } else if (isNumber(number) && number >= 1) {
      if (number.toFixed(2).slice(-2) !== '00') {
        throw new Error('Invalid param.');
      }
      for (let i = 0; i < number; i += 1) {
        this.priorityQueue.shift();
      }
    } else {
      throw new Error('Invalid param.');
    }
  }

  /** clear */
  clear() {
    this.priorityQueue = [];
  }
}
