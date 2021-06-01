/* eslint-disable class-methods-use-this */
import { isInteger } from 'lodash-es';

/* eslint-disable import/prefer-default-export */
export class Heap<T = any> {
  heap: T[];

  compareFn: (a: T, b: T) => number;

  constructor(compareFn: (a: T, b: T) => number) {
    this.heap = [];
    this.compareFn = compareFn;
  }

  getSize() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  getParentIndex(nodeIndex: number) {
    if (!isInteger(nodeIndex) || nodeIndex <= 0) {
      throw new Error('The param should be a positive integer.');
    }
    return Math.floor((nodeIndex - 1) / 2);
  }

  getLeftChildIndex(nodeIndex: number) {
    if (!isInteger(nodeIndex) || nodeIndex < 0) {
      throw new Error('The param should be a non-negative integer.');
    }
    return 2 * nodeIndex + 1;
  }

  getRightChildIndex(nodeIndex: number) {
    if (!isInteger(nodeIndex) || nodeIndex < 0) {
      throw new Error('The param should be a non-negative integer.');
    }
    return 2 * nodeIndex + 2;
  }

  shiftUp(nodeIndex: number) {
    if (!isInteger(nodeIndex) || nodeIndex < 0) {
      throw new Error('The param should be a non-negative integer.');
    }
    if (nodeIndex === 0 || this.heap[nodeIndex] === undefined) {
      return;
    }
    const parentIndex = this.getParentIndex(nodeIndex);
    if (this.compareFn(this.heap[parentIndex], this.heap[nodeIndex]) > 0) {
      [this.heap[parentIndex], this.heap[nodeIndex]] = [
        this.heap[nodeIndex],
        this.heap[parentIndex],
      ];
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(nodeIndex: number) {
    if (!isInteger(nodeIndex) || nodeIndex < 0) {
      throw new Error('The param should be a non-negative integer.');
    }
    if (this.heap[nodeIndex] === undefined) {
      return;
    }
    const leftChildIndex = this.getLeftChildIndex(nodeIndex);
    if (this.heap[leftChildIndex]) {
      if (this.compareFn(this.heap[leftChildIndex], this.heap[nodeIndex]) < 0) {
        [this.heap[leftChildIndex], this.heap[nodeIndex]] = [
          this.heap[nodeIndex],
          this.heap[leftChildIndex],
        ];
        this.shiftDown(leftChildIndex);
      }
    }
    const rightChildIndex = this.getRightChildIndex(nodeIndex);
    if (this.heap[rightChildIndex]) {
      if (
        this.compareFn(this.heap[rightChildIndex], this.heap[nodeIndex]) < 0
      ) {
        [this.heap[rightChildIndex], this.heap[nodeIndex]] = [
          this.heap[nodeIndex],
          this.heap[rightChildIndex],
        ];
        this.shiftDown(rightChildIndex);
      }
    }
  }

  push(nodeValue: T) {
    this.heap.push(nodeValue);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length > 0) {
      this.heap[0] = this.heap.pop() as T;
      this.shiftDown(0);
    }
  }
}
