/* eslint-disable import/prefer-default-export */
import { isNumber } from 'lodash-es';

export class Queue<T = any> {
  queue: T[] = [];

  /**
   * @desc 元素入队
   * @memberof Queue
   */
  push(...rest: T[]): void {
    if (rest.length === 0) {
      throw new Error('需要提供入队元素');
    }
    rest.forEach((item) => {
      this.queue.push(item);
    });
  }

  /**
   * @description 队首元素出队
   * @memberof Queue
   */
  pop(number?: number) {
    if (number === undefined) {
      this.queue.shift();
    } else if (isNumber(number) && number >= 1) {
      if (number.toFixed(2).slice(-2) !== '00') {
        throw new Error('参数不合法');
      }
      for (let i = 0; i < number; i += 1) {
        this.queue.shift();
      }
    } else {
      throw new Error('参数不合法');
    }
  }

  /**
   * @description 获取队内元素数量
   * @memberof Queue
   */
  getSize() {
    return this.queue.length;
  }

  /**
   * @description 检查队列是否为空
   * @memberof Queue
   */
  isEmpty() {
    return this.getSize() === 0;
  }

  /**
   * @description 获取队首元素
   * @memberof Queue
   */
  getFirst() {
    return this.isEmpty() ? null : this.queue[0];
  }

  /**
   * @description 获取队尾元素
   * @memberof Queue
   */
  getLast() {
    return this.isEmpty() ? null : this.queue[this.getSize() - 1];
  }
}
