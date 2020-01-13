/**
 * @description
 * @class SinglyLinkedList
 */

import { isFunction, isUndefined, isNull, isNumber } from 'lodash'

class SinglyLinkedList<T> {
  list: T[] = []
  size: number = 0

  constructor (...rest) {
    if (rest.length > 0) {
      throw new Error('Singly linked list should be initialled with none params.')
    }
  }

  addNode (val: T, index?: number): void {
    if (!isNumber(index) && !isUndefined(index)) {
      throw new Error('Index should be a number or undefined.')
    }
    const idx: number = isUndefined(index) ? this.size : index
    if (idx > this.size || idx < 0) {
      if (this.size === 0) {
        throw new Error('Add node to the singly linked list failed cause out of boundary. You should add to the index 0.')
      }
      throw new Error(`Add node to the singly linked list failed cause out of boundary. You should add to the index between 0 and ${this.size}.`)
    }
    this.list.splice(idx, 0, val)
    this.size += 1
  }

  removeNode (index: number): void {
    if (!isNumber(index)) {
      throw new Error('Index should be a number.')
    }
    if (index > this.size || index < 0) {
      if (this.size === 0) {
        throw new Error('Remove node from the singly linked list failed cause out of boundary. You can only remove from index 0.')
      }
      throw new Error(`Remove node from the singly linked list failed cause out of boundary. You can remove from index between 0 and ${this.size}.`)
    }
    this.list.splice(index, 1)
    this.size -= 1
  }

  /**
   * @description Returns reference to the first node in the singly linked list
   * @memberof SinglyLinkedList
   */
  getFirst (): T | null {
    if (this.size === 0) {
      return null
    }
    return this.list[0]
  }

  /**
   * @description Returns reference to the last node in the singly linked list
   * @memberof SinglyLinkedList
   */
  getLast (): T | null {
    if (this.size === 0) {
      return null
    }
    return this.list[this.size - 1]
  }

  getNode (index: number): T | null {
    if (!isNumber(index)) {
      throw new Error('Index should be a number.')
    }
    if (index > this.size || index < 0) {
      if (this.size === 0) {
        throw new Error('Get node from the singly linked list failed cause out of boundary.  You can only get index 0.')
      }
      throw new Error(`Get node from the singly linked list failed cause out of boundary. You can get from index between 0 and ${this.size}.`)
    }
    const node = this.list[index]
    return isUndefined(node) ? null : node
  }

  /**
   * @description Returns the number of nodes in the singly linked list
   * @memberof SinglyLinkedList
   */
  getSize (): number {
    return this.size
  }

  /**
   * @description Checks if the singly linked list has no nodes
   * @memberof SinglyLinkedList
   */
  isEmpty (): boolean {
    return this.size === 0
  }
}

const singlyLinkedList = new SinglyLinkedList()

console.log('getFirst()', singlyLinkedList.getFirst()) // null
console.log('getLast', singlyLinkedList.getLast()) // null
console.log('getNode(0)', singlyLinkedList.getNode(0)) // null
// console.log('getNode(1)', singlyLinkedList.getNode(1)) // error
console.log('getSize()', singlyLinkedList.getSize()) // 0
console.log('isEmpty()', singlyLinkedList.isEmpty()) // true
console.log('\r')

console.log('addNode(1)', singlyLinkedList.addNode(1)) // undefined
console.log('addNode(0, 0)', singlyLinkedList.addNode(0, 0)) // undefined
console.log('getFirst()', singlyLinkedList.getFirst()) // 0
console.log('getLast()', singlyLinkedList.getLast()) // 1
console.log('getNode(0)', singlyLinkedList.getNode(0)) // 0
console.log('getNode(1)', singlyLinkedList.getNode(1)) // 1
console.log('getSize()', singlyLinkedList.getSize()) // 2
console.log('isEmpty()', singlyLinkedList.isEmpty()) // false
console.log('\r')

console.log('removeNode(1)', singlyLinkedList.removeNode(1)) // undefined
console.log('getFirst()', singlyLinkedList.getFirst()) // 0
console.log('getLast()', singlyLinkedList.getLast()) // 0
console.log('getNode(0)', singlyLinkedList.getNode(0)) // 0
// console.log('getNode(1)', singlyLinkedList.getNode(1)) // error
console.log('getSize()', singlyLinkedList.getSize()) // 1
console.log('isEmpty()', singlyLinkedList.isEmpty()) // false
console.log('\r')

console.log('removeNode(0)', singlyLinkedList.removeNode(0)) // undefined
console.log('getFirst()', singlyLinkedList.getFirst()) // null
console.log('getLast()', singlyLinkedList.getLast()) // null
console.log('getNode(0)', singlyLinkedList.getNode(0)) // null
// console.log('getNode(1)', singlyLinkedList.getNode(0)) // error
console.log('getSize()', singlyLinkedList.getSize()) // 0
console.log('isEmpty()', singlyLinkedList.isEmpty()) // true
