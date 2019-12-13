/**
 * @description FILO
 * @class Stack
 */
class Stack {
  stack: any[] = []

  constructor (...rest) {
    if (rest.length > 0) {
      throw new Error('Stack should be initialled with none params.')
    }
  }

  /**
   * @description Pushes the given element to the top of the stack
   * @memberof Stack
   */
  push (ele): void {
    this.stack.push(ele)
  }

  /**
   * @description Removes the top element from the stack
   * @memberof Stack
   */
  pop (): void {
    this.stack.pop()
  }

  /**
   * @description Returns reference to the top element in the stack
   * @memberof Stack
   */
  getTop (): any {
    if (this.isEmpty()) {
      return null
    }
    return this.stack[this.getSize() - 1]
  }

  /**
   * @description Returns the number of elements in the stack
   * @memberof Stack
   */
  getSize (): number {
    return this.stack.length
  }

  /**
   * @description Checks if the stack has no elements
   * @memberof Stack
   */
  isEmpty (): boolean {
    return this.getSize() === 0
  }
}

export default Stack
