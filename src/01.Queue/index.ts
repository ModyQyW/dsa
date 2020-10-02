/**
 * @description FIFO
 * @class Queue
 */
class Queue<T = any> {
  queue: T[] = [];

  constructor(...rest) {
    if (rest.length > 0) {
      throw new Error('Queue should be initialled with none params.');
    }
  }

  /**
   * @description Pushes the given element value to the end of the queue
   * @memberof Queue
   */
  push(ele: T): void {
    this.queue.push(ele);
  }

  /**
   * @description Removes an element from the front of the queue
   * @memberof Queue
   */
  pop(): void {
    this.queue.shift();
  }

  /**
   * @description Returns reference to the first element in the queue
   * @memberof Queue
   */
  getFirst(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }

  /**
   * @description Returns reference to the last element in the queue
   * @memberof Queue
   */
  getLast(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.getSize() - 1];
  }

  /**
   * @description Returns the number of elements in the queue
   * @memberof Queue
   */
  getSize(): number {
    return this.queue.length;
  }

  /**
   * @description Checks if the queue has no elements
   * @memberof Queue
   */
  isEmpty(): boolean {
    return this.getSize() === 0;
  }
}

const q = new Queue<number>();
console.log('getFirst()', q.getFirst()); // null
console.log('getLast()', q.getLast()); // null
console.log('getSize()', q.getSize()); // 0
console.log('isEmpty()', q.isEmpty()); // true
console.log('\r');

// console.log('push(\'a\')', q.push('a')) // Argument of type '"a"' is not assignable to parameter of type 'number'.
console.log('push(0)', q.push(0)); // undefined
console.log('getFirst()', q.getFirst()); // 0
console.log('getLast()', q.getLast()); // 0
console.log('getSize()', q.getSize()); // 1
console.log('isEmpty()', q.isEmpty()); // false
console.log('\r');

console.log('push(1)', q.push(1)); // undefined
console.log('getFirst()', q.getFirst()); // 0
console.log('getLast()', q.getLast()); // 1
console.log('getSize()', q.getSize()); // 2
console.log('isEmpty()', q.isEmpty()); // false
console.log('\r');

console.log('pop()', q.pop()); // undefined
console.log('getFirst()', q.getFirst()); // 1
console.log('getLast()', q.getLast()); // 1
console.log('getSize()', q.getSize()); // 1
console.log('isEmpty()', q.isEmpty()); // false
console.log('\r');

console.log('pop()', q.pop()); // undefined
console.log('getFirst()', q.getFirst()); // null
console.log('getLast()', q.getLast()); // null
console.log('getSize()', q.getSize()); // 0
console.log('isEmpty()', q.isEmpty()); // true
console.log('\r');

console.log('pop()', q.pop()); // undefined
console.log('getFirst()', q.getFirst()); // null
console.log('getLast()', q.getLast()); // null
console.log('getSize()', q.getSize()); // 0
console.log('isEmpty()', q.isEmpty()); // true
