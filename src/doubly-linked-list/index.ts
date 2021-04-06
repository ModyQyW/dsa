/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { DoublyLinkedListNode } from './node';

// TODO: unique node
// TODO: better comparison
export class DoublyLinkedList<T = any> {
  head: DoublyLinkedListNode<T> | null = null;

  tail: DoublyLinkedListNode<T> | null = null;

  size = 0;

  /** Get the head of the doubly linked list */
  getHead() {
    return this.head;
  }

  /** Get the tail of the doubly linked list */
  getTail() {
    return this.tail;
  }

  /** Get the size of the doubly linked list */
  getSize() {
    return this.size;
  }

  /** Check if the doubly linked list is empty */
  isEmpty() {
    return this.size === 0;
  }

  /** Get the corresponding array */
  getArray() {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  /** Get the first node with a specific value, searching from the head */
  getNode(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      if (Object.is(currentNode.value, value)) {
        break;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /** Get the last node with a specific value, searching from the tail */
  getLastNode(value: T) {
    let currentNode = this.tail;
    while (currentNode) {
      if (Object.is(currentNode.value, value)) {
        break;
      }
      currentNode = currentNode.prev;
    }
    return currentNode;
  }

  /** Add a node with a specific value before a specific node */
  addNodeBefore(node: DoublyLinkedListNode<T> | null, value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (node) {
      const prevNode = node.prev;
      node.prev = newNode;
      newNode.prev = prevNode;
      newNode.next = node;
      if (prevNode === null) {
        this.head = newNode;
      } else {
        prevNode.next = newNode;
      }
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  /** Add a node with a specific value after a specific node */
  addNodeAfter(node: DoublyLinkedListNode<T> | null, value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (node) {
      const nextNode = node.next;
      node.next = newNode;
      newNode.prev = node;
      newNode.next = nextNode;
      if (nextNode === null) {
        this.tail = newNode;
      } else {
        nextNode.prev = newNode;
      }
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  /** Remove the node before a specific node */
  removeNodeBefore(node: DoublyLinkedListNode<T> | null) {
    if (node) {
      const prevNode = node.prev;
      if (prevNode !== null) {
        const newPrevNode = prevNode.prev;
        node.prev = newPrevNode;
        prevNode.next = null;
        if (newPrevNode === null) {
          this.head = node;
        } else {
          newPrevNode.next = node;
          prevNode.prev = null;
        }
        this.size -= 1;
      }
    }
  }

  /** Remove the node after a specific node */
  removeNodeAfter(node: DoublyLinkedListNode<T> | null) {
    if (node) {
      const nextNode = node.next;
      if (nextNode !== null) {
        const newNextNode = nextNode.next;
        node.next = newNextNode;
        nextNode.prev = null;
        if (newNextNode === null) {
          this.tail = node;
        } else {
          newNextNode.prev = node;
          nextNode.next = null;
        }
        this.size -= 1;
      }
    }
  }

  /** clear */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
