/**
 * @description FIFO
 * @class PriorityQueue
 */
class PriorityQueue {
  priorityQueue: any[] = []
  compareFn: null | ((a: any, b: any) => (0 | -1 | 1)) = null

  constructor (compareFn?: ((a: any, b: any) => (0 | -1 | 1)), ...rest) {
    if (rest.length > 1) {
      throw new Error('Priority queue should initial with at most 1 param.')
    }
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
   * @description Pushes the given element value to the end of the queue
   * @memberof PriorityQueue
   */
  push (ele): void {
    if (this.compareFn === null) {
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
  getFirst (): any {
    if (this.isEmpty()) {
      return null
    }
    return this.priorityQueue[0]
  }

  /**
   * @description Returns reference to the last element in the queue
   * @memberof PriorityQueue
   */
  getLast (): any {
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

const compareFn = (x: number, y: number): (0 | -1 | 1) => {
  return x < y
    ? 1
    : (x > y ? -1 : 0)
}

// const compareFn = (x: number, y: number): (0 | -1 | 1) => {
//   return x < y
//     ? -1
//     : (x > y ? 1 : 0)
// }

const priorityQueue = new PriorityQueue(compareFn)

// const priorityQueue = new PriorityQueue()

console.log('getFirst', priorityQueue.getFirst())
console.log('getLast', priorityQueue.getLast())
console.log('getSize', priorityQueue.getSize())
console.log('isEmpty', priorityQueue.isEmpty())
console.log('\r\n')

console.log('push 1', priorityQueue.push(1))
console.log('getFirst', priorityQueue.getFirst())
console.log('getLast', priorityQueue.getLast())
console.log('getSize', priorityQueue.getSize())
console.log('isEmpty', priorityQueue.isEmpty())
console.log('\r\n')

console.log('push 100', priorityQueue.push(100))
console.log('getFirst', priorityQueue.getFirst())
console.log('getLast', priorityQueue.getLast())
console.log('getSize', priorityQueue.getSize())
console.log('isEmpty', priorityQueue.isEmpty())
console.log('\r\n')

console.log('push 50', priorityQueue.push(50))
console.log('getFirst', priorityQueue.getFirst())
console.log('getLast', priorityQueue.getLast())
console.log('getSize', priorityQueue.getSize())
console.log('isEmpty', priorityQueue.isEmpty())
console.log('\r\n')
