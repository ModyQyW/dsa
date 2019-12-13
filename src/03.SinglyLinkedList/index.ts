/**
 * @description
 * @class SinglyLinkedList
 */

interface LinkedListNode {
  val: any
  next: ReturnedLinkedListNode
}

type ReturnedLinkedListNode = LinkedListNode | null

class SinglyLinkedListNode {
  val: any = null
  next: ReturnedLinkedListNode = null

  constructor (val: any, next: ReturnedLinkedListNode) {
    this.val = val
    this.next = next
  }
}

class SinglyLinkedList {
  head: LinkedListNode = new SinglyLinkedListNode(null, null)
  size: number = 0

  constructor (...rest) {
    if (rest.length > 0) {
      throw new Error('Singly linked list should be initialled with none params.')
    }
  }

  addNode (val: any, index?: number | null): void {
    if (Object.prototype.toString.call(index).slice(8, -1) !== 'Number' && index !== undefined && index !== null) {
      throw new Error('Index should be a number, undefined or null.')
    }
    const idx: number = index === undefined || index === null ? this.size : index
    if (idx > this.size || idx < 0) {
      if (this.size === 0) {
        throw new Error('Add node to the singly linked list failed cause out of boundary. You should add to the index 0.')
      }
      throw new Error(`Add node to the singly linked list failed cause out of boundary. You should add to the index between 0 and ${this.size}.`)
    }
    let nodeTmp: ReturnedLinkedListNode = this.head
    for (let i = 0; i < idx; i += 1) {
      nodeTmp = nodeTmp.next as LinkedListNode
    }
    nodeTmp.next = new SinglyLinkedListNode(val, nodeTmp.next)
    this.size += 1
  }

  removeNode (index: number): void {
    if (Object.prototype.toString.call(index).slice(8, -1) !== 'Number') {
      throw new Error('Index should be a number.')
    }
    if (index > this.size || index < 0) {
      if (this.size === 0) {
        throw new Error('Remove node from the singly linked list failed cause out of boundary. You can only remove from index 0.')
      }
      throw new Error(`Remove node from the singly linked list failed cause out of boundary. You can remove from index between 0 and ${this.size}.`)
    }
    let nodeTmp: ReturnedLinkedListNode = this.head
    for (let i = 0; i < index; i += 1) {
      nodeTmp = nodeTmp.next as LinkedListNode
    }
    nodeTmp.next = nodeTmp.next === null ? null : nodeTmp.next.next
    this.size -= 1
  }

  /**
   * @description Returns reference to the first node in the singly linked list
   * @memberof SinglyLinkedList
   */
  getFirst (): ReturnedLinkedListNode {
    return this.head.next === null ? null : this.head.next.val
  }

  /**
   * @description Returns reference to the last node in the singly linked list
   * @memberof SinglyLinkedList
   */
  getLast (): ReturnedLinkedListNode {
    let nodeTmp: ReturnedLinkedListNode = this.head.next as LinkedListNode
    if (nodeTmp === null) {
      return null
    }
    while (nodeTmp.next !== null) {
      nodeTmp = nodeTmp.next
    }
    return nodeTmp.val
  }

  getNode (index: number): ReturnedLinkedListNode {
    if (Object.prototype.toString.call(index).slice(8, -1) !== 'Number') {
      throw new Error('Index should be a number.')
    }
    if (index > this.size || index < 0) {
      if (this.size === 0) {
        throw new Error('Get node from the singly linked list failed cause out of boundary. You can only get from index 0.')
      }
      throw new Error(`Get node from the singly linked list failed cause out of boundary. You can get from index between 0 and ${this.size}.`)
    }
    let nodeTmp: ReturnedLinkedListNode = this.head
    for (let i = 0; i < index; i += 1) {
      nodeTmp = nodeTmp.next as LinkedListNode
    }
    return nodeTmp.next === null ? null : nodeTmp.next.val
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

console.log('first node', singlyLinkedList.getFirst())
console.log('last node', singlyLinkedList.getLast())
console.log('getNode0', singlyLinkedList.getNode(0))
// console.log('getNode1', singlyLinkedList.getNode(1)) // error
console.log('size', singlyLinkedList.getSize())
console.log('isEmpty', singlyLinkedList.isEmpty())
console.log('\r\n')

console.log('addNode(1)', singlyLinkedList.addNode(1))
console.log('addNode(0, 0)', singlyLinkedList.addNode(0, 0))
console.log('first node', singlyLinkedList.getFirst())
console.log('last node', singlyLinkedList.getLast())
console.log('getNode0', singlyLinkedList.getNode(0))
console.log('getNode1', singlyLinkedList.getNode(1))
console.log('size', singlyLinkedList.getSize())
console.log('isEmpty', singlyLinkedList.isEmpty())
console.log('\r\n')

console.log('removeNode(0)', singlyLinkedList.removeNode(0))
console.log('first node', singlyLinkedList.getFirst())
console.log('last node', singlyLinkedList.getLast())
console.log('getNode0', singlyLinkedList.getNode(0))
// console.log('getNode1', singlyLinkedList.getNode(1)) // error
console.log('size', singlyLinkedList.getSize())
console.log('isEmpty', singlyLinkedList.isEmpty())
