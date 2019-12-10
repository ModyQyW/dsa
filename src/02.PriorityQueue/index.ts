// TODO: optimize
/**
 * @description FIFO
 * @class PriorityQueue
 */
class PriorityQueue {
  priorityQueue: any[] = []
  compareFn: null | ((a: any, b: any) => number) = null

  constructor (...rest) {
    if (rest.length > 1) {
      throw new Error('Priority queue should initial with at most 1 param.')
    }
    const compareFn = rest[0]
    if (
      compareFn !== undefined &&
      Object.prototype.toString.call(compareFn).toString().slice(8, -1) !== 'Function'
    ) {
      throw new Error('Priority queue should initial with none params or a compare function.')
    }
    if (compareFn !== undefined) {
      this.compareFn = compareFn
    }
  }

  /**
   * @description Returns reference to the first element in the queue
   * @memberof PriorityQueue
   */
  front (): any {
    if (this.isEmpty()) {
      return null
    }
    return this.priorityQueue[0]
  }

  /**
   * @description Returns reference to the last element in the queue
   * @memberof PriorityQueue
   */
  back (): any {
    if (this.isEmpty()) {
      return null
    }
    return this.priorityQueue[this.getSize() - 1]
  }

  /**
   * @description Pushes the given element value to the end of the queue
   * @memberof PriorityQueue
   */
  push (ele): void {
    this.priorityQueue.push(ele)
    if (this.compareFn !== null) {
      this.priorityQueue.sort(this.compareFn)
    }
  }

  /**
   * @description Removes an element from the front of the queue
   * @memberof PriorityQueue
   */
  pop (): void {
    this.priorityQueue.shift()
    if (this.compareFn !== null) {
      this.priorityQueue.sort(this.compareFn)
    }
  }

  /**
   * @description Returns the number of elements in the queue
   * @memberof PriorityQueue
   */
  getSize (): number {
    return this.priorityQueue.length
  }

  /**
   * @description Checks if the queue has no elements
   * @memberof PriorityQueue
   */
  isEmpty (): boolean {
    return this.getSize() === 0
  }
}

export default PriorityQueue
