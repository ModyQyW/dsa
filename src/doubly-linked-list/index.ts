/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { DoublyLinkedListNode } from './node';

export class DoublyLinkedList<T = any> {
  head: DoublyLinkedListNode<T> | null;

  tail: DoublyLinkedListNode<T> | null;

  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  getArray() {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

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

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
