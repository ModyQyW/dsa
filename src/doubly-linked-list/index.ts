/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { DoublyLinkedListNode } from './node';

// PERF: 节点唯一化

/** 双向链表 */
export class DoublyLinkedList<T = any> {
  head: DoublyLinkedListNode<T> | null = null;

  tail: DoublyLinkedListNode<T> | null = null;

  size = 0;

  /** 获取双向链表头部 */
  getHead() {
    return this.head;
  }

  /** 获取双向链表尾部 */
  getTail() {
    return this.tail;
  }

  /** 获取双向链表元素数量 */
  getSize() {
    return this.size;
  }

  /** 检查双向链表是否味空 */
  isEmpty() {
    return this.size === 0;
  }

  /** 获取双向链表对应的数组 */
  getArray() {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  /** 获取从双向链表头部出发，值为特定值的第一个节点 */
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

  /** 获取从双向链表尾部出发，值为特定值的第一个节点 */
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

  /** 在双向链表特定节点之前添加一个值为特定值的节点 */
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

  /** 在双向链表特定节点之后添加一个值为特定值的节点 */
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

  /** 移除双向链表特定节点之前的节点 */
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

  /** 移除双向链表特定节点之后的节点 */
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

  /** 清空双向链表 */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
