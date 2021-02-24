/* eslint-disable import/prefer-default-export */
export class DoublyLinkedListNode<V = any> {
  value: V;

  prev: DoublyLinkedListNode<V> | null;

  next: DoublyLinkedListNode<V> | null;

  constructor(value: V) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
