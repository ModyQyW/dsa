/* eslint-disable class-methods-use-this */
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

  peek() {
    return this.heap[0];
  }

  getParentIndex(nodeIndex) {
    return Math.floor((nodeIndex - 1) / 2);
  }

  getLeftChildIndex(nodeIndex) {
    return 2 * nodeIndex + 1;
  }

  getRightChildIndex(nodeIndex) {
    return 2 * nodeIndex + 2;
  }

  shiftUp(nodeIndex) {
    if (nodeIndex === 0) {
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

  shiftDown(nodeIndex) {
    const leftChildIndex = this.getLeftChildIndex(nodeIndex);
    if (this.compareFn(this.heap[leftChildIndex], this.heap[nodeIndex]) < 0) {
      [this.heap[leftChildIndex], this.heap[nodeIndex]] = [
        this.heap[nodeIndex],
        this.heap[leftChildIndex],
      ];
      this.shiftDown(leftChildIndex);
    }
    const rightChildIndex = this.getRightChildIndex(nodeIndex);
    if (this.compareFn(this.heap[rightChildIndex], this.heap[nodeIndex]) < 0) {
      [this.heap[rightChildIndex], this.heap[nodeIndex]] = [
        this.heap[nodeIndex],
        this.heap[rightChildIndex],
      ];
      this.shiftDown(rightChildIndex);
    }
  }

  push(nodeValue) {
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
