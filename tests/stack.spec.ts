import { Stack } from '@/stack';

describe('Stack', () => {
  const stack = new Stack<string | number>();

  it('initial state', () => {
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeNull();
    expect(stack.pop()).toBeUndefined();
    expect(stack.pop(1)).toBeUndefined();
  });

  it('push nothing', () => {
    expect(() => stack.push()).toThrow('需要提供入栈元素。');
  });

  it('pop float', () => {
    expect(() => stack.pop(1.3)).toThrow('参数不合法');
    expect(() => stack.pop(0.3)).toThrow('参数不合法');
  });

  it('push one element', () => {
    expect(stack.push('test')).toBeUndefined();
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe('test');
  });

  it('push other two elements', () => {
    expect(stack.push(1, 2)).toBeUndefined();
    expect(stack.getSize()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(2);
  });

  it('clear', () => {
    expect(stack.clear()).toBeUndefined();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBe(null);
  });
});
