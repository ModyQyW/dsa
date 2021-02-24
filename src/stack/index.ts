/* eslint-disable import/prefer-default-export */
import { isNumber } from 'lodash-es';

export class Stack<T = any> {
  stack: T[] = [];

  /**
   * @desc 获取栈内元素数量
   * @memberof Stack
   */
  getSize() {
    return this.stack.length;
  }

  /**
   * @desc 检查栈是否为空
   * @memberof Stack
   */
  isEmpty() {
    return this.getSize() === 0;
  }

  /**
   * @desc 元素入栈
   * @memberof Stack
   */
  push(...rest: T[]) {
    if (rest.length === 0) {
      throw new Error('需要提供入栈元素');
    }
    rest.forEach((item) => {
      this.stack.push(item);
    });
  }

  /**
   * @desc 元素出栈
   * @memberof Stack
   */
  pop(number?: number) {
    if (number === undefined) {
      this.stack.pop();
    } else if (isNumber(number) && number >= 1) {
      if (number.toFixed(2).slice(-2) !== '00') {
        throw new Error('参数不合法');
      }
      for (let i = 0; i < number; i += 1) {
        this.stack.pop();
      }
    } else {
      throw new Error('参数不合法');
    }
  }

  /**
   * @desc 获取栈顶元素
   * @memberof Stack
   */
  getTop() {
    return this.isEmpty() ? null : this.stack[this.getSize() - 1];
  }

  /**
   * @desc 清空栈
   * @memberof Stack
   */
  clear() {
    this.stack = [];
  }
}
