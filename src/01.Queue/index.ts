/**
 * @description FIFO
 * @class Queue
 */
class Queue {
  queue: any[] = []

  constructor (...rest) {
    if (rest.length > 0) {
      throw new Error('Queue should be initialled with none params.')
    }
  }

  /**
   * @description Pushes the given element value to the end of the queue
   * @memberof Queue
   */
  push (ele): void {
    this.queue.push(ele)
  }

  /**
   * @description Removes an element from the front of the queue
   * @memberof Queue
   */
  pop (): void {
    this.queue.shift()
  }

  /**
   * @description Returns reference to the first element in the queue
   * @memberof Queue
   */
  getFirst (): any {
    if (this.isEmpty()) {
      return null
    }
    return this.queue[0]
  }

  /**
   * @description Returns reference to the last element in the queue
   * @memberof Queue
   */
  getLast (): any {
    if (this.isEmpty()) {
      return null
    }
    return this.queue[this.getSize() - 1]
  }

  /**
   * @description Returns the number of elements in the queue
   * @memberof Queue
   */
  getSize (): number {
    return this.queue.length
  }

  /**
   * @description Checks if the queue has no elements
   * @memberof Queue
   */
  isEmpty (): boolean {
    return this.getSize() === 0
  }
}

export default Queue
