import { Queue } from '@/queue';

describe('Queue', () => {
  const queue = new Queue<string | number>();

  it('initial state', () => {
    expect(queue.getSize()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getFirst()).toBeNull();
    expect(queue.getLast()).toBeNull();
    expect(queue.pop()).toBeUndefined();
    expect(queue.pop(1)).toBeUndefined();
  });

  it('push nothing', () => {
    expect(() => queue.push()).toThrow('需要提供入队元素');
  });

  it('pop float', () => {
    expect(() => queue.pop(1.3)).toThrow('参数不合法');
    expect(() => queue.pop(0.3)).toThrow('参数不合法');
  });

  it('push one element', () => {
    expect(queue.push('test')).toBeUndefined();
    expect(queue.getSize()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getFirst()).toBe('test');
    expect(queue.getLast()).toBe('test');
  });

  it('push other two elements', () => {
    expect(queue.push(1, 2)).toBeUndefined();
    expect(queue.getSize()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.getFirst()).toBe('test');
    expect(queue.getLast()).toBe(2);
  });

  it('clear', () => {
    expect(queue.clear()).toBeUndefined();
    expect(queue.getSize()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.getFirst()).toBeNull();
    expect(queue.getLast()).toBeNull();
  });
});
