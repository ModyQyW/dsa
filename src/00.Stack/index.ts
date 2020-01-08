/**
 * @description FILO
 * @class Stack
 */
class Stack<T = any> {
  stack: T[] = []

  constructor (...rest) {
    if (rest.length > 0) {
      throw new Error('Stack should be initialled with none params.')
    }
  }

  /**
   * @description Pushes the given element to the top of the stack
   * @memberof Stack
   */
  push (ele: T): void {
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
  getTop (): T | null {
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

const s = new Stack<number>()
console.log('getTop()', s.getTop()) // null
console.log('getSize()', s.getSize()) // 0
console.log('isEmpty()', s.isEmpty()) // true
console.log('\r')

// console.log('push(\'a\')', s.push('a')) // Argument of type '"a"' is not assignable to parameter of type 'number'.
console.log('push(0)', s.push(0)) // undefined
console.log('getTop()', s.getTop()) // 0
console.log('getSize()', s.getSize()) // 1
console.log('isEmpty()', s.isEmpty()) // false
console.log('\r')

console.log('push(1)', s.push(1)) // undefined
console.log('getTop()', s.getTop()) // 1
console.log('getSize()', s.getSize()) // 2
console.log('isEmpty()', s.isEmpty()) // false
console.log('\r')

console.log('pop()', s.pop()) // undefined
console.log('getTop()', s.getTop()) // 0
console.log('getSize()', s.getSize()) // 1
console.log('isEmpty()', s.isEmpty()) // false
console.log('\r')

console.log('pop()', s.pop()) // undefined
console.log('getTop()', s.getTop()) // null
console.log('getSize()', s.getSize()) // 0
console.log('isEmpty()', s.isEmpty()) // true
console.log('\r')

console.log('pop()', s.pop()) // undefined
console.log('getTop()', s.getTop()) // null
console.log('getSize()', s.getSize()) // 0
console.log('isEmpty()', s.isEmpty()) // true
console.log('\r')
