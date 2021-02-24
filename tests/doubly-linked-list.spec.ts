import { DoublyLinkedListNode } from '@/doubly-linked-list/node';
import { DoublyLinkedList } from '@/doubly-linked-list';

describe('DoublyLinkedList', () => {
  const list = new DoublyLinkedList<number>();

  it('initial state', () => {
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getArray()).toStrictEqual([]);
    expect(list.getNode(1)).toBeNull();
    expect(list.getLastNode(1)).toBeNull();
    expect(list.removeNodeBefore(null)).toBeUndefined();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getArray()).toStrictEqual([]);
    expect(list.removeNodeAfter(null)).toBeUndefined();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getArray()).toStrictEqual([]);
  });

  it('add four nodes', () => {
    expect(list.addNodeBefore(list.getHead(), 1)).toBeUndefined();
    expect(list.addNodeBefore(list.getHead(), 2)).toBeUndefined();
    expect(list.addNodeBefore(list.getTail(), 3)).toBeUndefined();
    expect(list.addNodeBefore(list.getTail(), 3)).toBeUndefined();
    expect((list.getHead() as DoublyLinkedListNode<number>).value).toBe(2);
    expect((list.getTail() as DoublyLinkedListNode<number>).value).toBe(1);
    expect(list.getSize()).toBe(4);
    expect(list.isEmpty()).toBe(false);
    expect(list.getArray()).toStrictEqual([2, 3, 3, 1]);
    expect((list.getNode(1) as DoublyLinkedListNode<number>).value).toBe(1);
    expect((list.getNode(2) as DoublyLinkedListNode<number>).value).toBe(2);
    expect((list.getNode(3) as DoublyLinkedListNode<number>).value).toBe(3);
    expect(list.getNode(4)).toBeNull();
    expect((list.getLastNode(1) as DoublyLinkedListNode<number>).value).toBe(1);
    expect((list.getLastNode(2) as DoublyLinkedListNode<number>).value).toBe(2);
    expect((list.getLastNode(3) as DoublyLinkedListNode<number>).value).toBe(3);
    expect(list.getLastNode(4)).toBeNull();
  });

  it('add other three nodes', () => {
    expect(list.addNodeAfter(list.getHead(), 1)).toBeUndefined();
    expect(list.addNodeAfter(list.getHead(), 2)).toBeUndefined();
    expect(list.addNodeAfter(list.getTail(), 3)).toBeUndefined();
    expect((list.getHead() as DoublyLinkedListNode<number>).value).toBe(2);
    expect((list.getTail() as DoublyLinkedListNode<number>).value).toBe(3);
    expect(list.getSize()).toBe(7);
    expect(list.isEmpty()).toBe(false);
    expect(list.getArray()).toStrictEqual([2, 2, 1, 3, 3, 1, 3]);
    expect(list.getNode(4)).toBeNull();
    expect(list.getLastNode(4)).toBeNull();
  });

  it('remove nodes', () => {
    expect(list.removeNodeBefore(list.getHead())).toBeUndefined();
    expect(list.removeNodeAfter(list.getTail())).toBeUndefined();
    expect(list.getSize()).toBe(7);
    expect(list.getArray()).toStrictEqual([2, 2, 1, 3, 3, 1, 3]);
    expect(
      list.removeNodeBefore(
        (list.getHead() as DoublyLinkedListNode<number>).next,
      ),
    ).toBeUndefined();
    expect(list.getSize()).toBe(6);
    expect(list.getArray()).toStrictEqual([2, 1, 3, 3, 1, 3]);
    expect(
      list.removeNodeAfter(
        (list.getTail() as DoublyLinkedListNode<number>).prev,
      ),
    ).toBeUndefined();
    expect(list.getSize()).toBe(5);
    expect(list.getArray()).toStrictEqual([2, 1, 3, 3, 1]);
    expect(
      list.removeNodeBefore(
        ((list.getHead() as DoublyLinkedListNode<number>)
          .next as DoublyLinkedListNode<number>).next,
      ),
    ).toBeUndefined();
    expect(list.getSize()).toBe(4);
    expect(list.getArray()).toStrictEqual([2, 3, 3, 1]);
    expect(
      list.removeNodeAfter(
        ((list.getTail() as DoublyLinkedListNode<number>)
          .prev as DoublyLinkedListNode<number>).prev,
      ),
    ).toBeUndefined();
    expect(list.getSize()).toBe(3);
    expect(list.getArray()).toStrictEqual([2, 3, 1]);
  });

  it('clear', () => {
    list.clear();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getArray()).toStrictEqual([]);
    expect(list.getNode(1)).toBeNull();
    expect(list.getLastNode(1)).toBeNull();
    expect(list.removeNodeBefore(null)).toBeUndefined();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getArray()).toStrictEqual([]);
    expect(list.removeNodeAfter(null)).toBeUndefined();
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
    expect(list.getSize()).toBe(0);
    expect(list.isEmpty()).toBe(true);
    expect(list.getArray()).toStrictEqual([]);
  });

  it('add four nodes again', () => {
    expect(list.addNodeAfter(list.getHead(), 1)).toBeUndefined();
    expect(list.addNodeAfter(list.getHead(), 2)).toBeUndefined();
    expect(list.addNodeAfter(list.getTail(), 3)).toBeUndefined();
    expect(list.addNodeAfter(list.getTail(), 3)).toBeUndefined();
    expect((list.getHead() as DoublyLinkedListNode<number>).value).toBe(1);
    expect((list.getTail() as DoublyLinkedListNode<number>).value).toBe(3);
    expect(list.getSize()).toBe(4);
    expect(list.isEmpty()).toBe(false);
    expect(list.getArray()).toStrictEqual([1, 2, 3, 3]);
  });
});
