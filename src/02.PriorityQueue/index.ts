/**
 * @description FIFO
 * @class PriorityQueue
 */

import { isFunction, isUndefined, isNull } from 'lodash'

class PriorityQueue<T = any> {
  priorityQueue: T[] = []
  compareFn: null | ((a: T, b: T) => (0 | -1 | 1)) = null

  constructor (
    compareFn?: ((a: T, b: T) => (0 | -1 | 1)),
    ...rest
  ) {
    if (rest.length > 1) {
      throw new Error('Priority queue should initial with at most 1 param.')
    }
    if (isFunction(compareFn)) {
      this.compareFn = compareFn
    } else if (!isUndefined(compareFn)) {
      throw new Error('Priority queue should initial with none params or a compare function.')
    }
  }

  /**
   * @description Pushes the given element value to the end of the queue
   * @memberof PriorityQueue
   */
  push (ele: T): void {
    if (isNull(this.compareFn)) {
      // no compareFn => fallback to normal queue
      this.priorityQueue.push(ele)
    } else {
      const size = this.getSize()
      if (size === 0) {
        // none elements
        this.priorityQueue.push(ele)
      } else {
        // at least 1 element
        let start = 0
        let end = size - 1
        if (start === end) {
          switch (this.compareFn(this.priorityQueue[start], ele)) {
            case 1:
              this.priorityQueue.unshift(ele)
              break
            default:
              this.priorityQueue.push(ele)
              break
          }
        } else {
          while (start < end) {
            const total = start + end
            if (total % 2 === 0) {
              const mid = total / 2
              switch (this.compareFn(this.priorityQueue[mid], ele)) {
                case 1:
                  end = mid
                  break
                default:
                  start = mid
                  break
              }
            } else {
              const mid1 = (total - 1) / 2
              const compareRes1 = this.compareFn(this.priorityQueue[mid1], ele)
              if (compareRes1 === 1) {
                end = mid1
                continue
              } else if (compareRes1 === 0) {
                start = mid1
                end = start
                break
              } else {
                start = mid1
              }
              const mid2 = (total + 1) / 2
              const compareRes2 = this.compareFn(this.priorityQueue[mid2], ele)
              if (compareRes2 === 1) {
                end = mid2
              } else if (compareRes2 === 0) {
                start = mid2
                end = start
                break
              } else {
                start = mid2
                continue
              }
              if (end - start === 1) {
                end = start
              }
            }
          }
          this.priorityQueue.splice(end + 1, 0, ele)
        }
      }
    }
    // console.log('priorityQueue', this.priorityQueue) // for development
  }

  /**
   * @description Removes an element from the front of the queue
   * @memberof PriorityQueue
   */
  pop (): void {
    this.priorityQueue.shift()
  }

  /**
   * @description Returns reference to the first element in the queue
   * @memberof PriorityQueue
   */
  getFirst (): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.priorityQueue[0]
  }

  /**
   * @description Returns reference to the last element in the queue
   * @memberof PriorityQueue
   */
  getLast (): T | null {
    if (this.isEmpty()) {
      return null
    }
    return this.priorityQueue[this.getSize() - 1]
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

const priorityQueue0 = new PriorityQueue<number>()

console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // null
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // null
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 0
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // true
console.log('\r')

console.log('priorityQueue0 push(1)', priorityQueue0.push(1)) // undefined
console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // 1
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // 1
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 1
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // false
console.log('\r')

console.log('priorityQueue0 push(100)', priorityQueue0.push(100)) // undefined
console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // 1
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // 100
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 2
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // false
console.log('\r')

console.log('priorityQueue0 push(50)', priorityQueue0.push(50)) // undefined
console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // 1
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // 50
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 3
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // false
console.log('\r')

console.log('priorityQueue0 pop()', priorityQueue0.pop()) // undefined
console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // 100
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // 50
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 2
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // false
console.log('\r')

console.log('priorityQueue0 pop()', priorityQueue0.pop()) // undefined
console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // 50
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // 50
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 1
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // false
console.log('\r')

console.log('priorityQueue0 pop()', priorityQueue0.pop()) // undefined
console.log('priorityQueue0 getFirst()', priorityQueue0.getFirst()) // null
console.log('priorityQueue0 getLast()', priorityQueue0.getLast()) // null
console.log('priorityQueue0 getSize()', priorityQueue0.getSize()) // 0
console.log('priorityQueue0 isEmpty()', priorityQueue0.isEmpty()) // true
console.log('\r')

const compareFn0 = (x: number, y: number): (0 | -1 | 1) => {
  return x < y
    ? 1
    : (x > y ? -1 : 0)
}

const compareFn1 = (x: number, y: number): (0 | -1 | 1) => {
  return x < y
    ? -1
    : (x > y ? 1 : 0)
}

const priorityQueue1 = new PriorityQueue<number>(compareFn0)

console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // null
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // null
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 0
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // true
console.log('\r')

console.log('priorityQueue1 push(1)', priorityQueue1.push(1)) // undefined
console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // 1
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // 1
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 1
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // false
console.log('\r')

console.log('priorityQueue1 push(100)', priorityQueue1.push(100)) // undefined
console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // 100
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // 1
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 2
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // false
console.log('\r')

console.log('priorityQueue1 push(50)', priorityQueue1.push(50)) // undefined
console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // 100
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // 1
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 3
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // false
console.log('\r')

console.log('priorityQueue1 pop()', priorityQueue1.pop()) // undefined
console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // 50
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // 1
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 2
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // false
console.log('\r')

console.log('priorityQueue1 pop()', priorityQueue1.pop()) // undefined
console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // 1
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // 1
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 1
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // false
console.log('\r')

console.log('priorityQueue1 pop()', priorityQueue1.pop()) // undefined
console.log('priorityQueue1 getFirst()', priorityQueue1.getFirst()) // null
console.log('priorityQueue1 getLast()', priorityQueue1.getLast()) // null
console.log('priorityQueue1 getSize()', priorityQueue1.getSize()) // 0
console.log('priorityQueue1 isEmpty()', priorityQueue1.isEmpty()) // true
console.log('\r')

const priorityQueue2 = new PriorityQueue<number>(compareFn1)

console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // null
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // null
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 0
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // true
console.log('\r')

console.log('priorityQueue2 push(1)', priorityQueue2.push(1)) // undefined
console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // 1
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // 1
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 1
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // false
console.log('\r')

console.log('priorityQueue2 push(100)', priorityQueue2.push(100)) // undefined
console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // 1
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // 100
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 2
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // false
console.log('\r')

console.log('priorityQueue2 push(50)', priorityQueue2.push(50)) // undefined
console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // 1
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // 100
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 3
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // false
console.log('\r')

console.log('priorityQueue2 pop()', priorityQueue2.pop()) // undefined
console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // 50
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // 100
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 2
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // false
console.log('\r')

console.log('priorityQueue2 pop()', priorityQueue2.pop()) // undefined
console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // 100
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // 100
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 1
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // false
console.log('\r')

console.log('priorityQueue2 pop()', priorityQueue2.pop()) // undefined
console.log('priorityQueue2 getFirst()', priorityQueue2.getFirst()) // null
console.log('priorityQueue2 getLast()', priorityQueue2.getLast()) // null
console.log('priorityQueue2 getSize()', priorityQueue2.getSize()) // 0
console.log('priorityQueue2 isEmpty()', priorityQueue2.isEmpty()) // true
