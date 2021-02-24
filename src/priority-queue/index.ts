/* eslint-disable no-continue, import/prefer-default-export */
import { isFunction, isNumber } from 'lodash-es';

export class PriorityQueue<T = any> {
  priorityQueue: T[] = [];

  compareFn: null | ((a: T, b: T) => 0 | -1 | 1) = null;

  constructor(compareFn?: (a: T, b: T) => 0 | -1 | 1, ...rest) {
    if (rest.length !== 0) {
      throw new Error('优先队列最多使用一个参数初始化');
    }
    if (isFunction(compareFn)) {
      this.compareFn = compareFn;
    } else if (compareFn !== undefined) {
      throw new Error(
        '优先队列最多使用一个参数初始化，参数应当是一个方法，它接收两个参数，并返回 0，-1 或 1 表示比较结果',
      );
    }
  }

  /**
   * @description 获取队内元素数量
   * @memberof PriorityQueue
   */
  getSize() {
    return this.priorityQueue.length;
  }

  /**
   * @description 检查队列是否为空
   * @memberof PriorityQueue
   */
  isEmpty() {
    return this.getSize() === 0;
  }

  /**
   * @description 元素入队
   * @memberof PriorityQueue
   */
  push(...rest: T[]) {
    if (rest.length === 0) {
      throw new Error('需要提供入队元素');
    }
    rest.forEach((item) => {
      this.priorityQueue.push(item);
    });
    if (this.compareFn !== null) {
      this.priorityQueue.sort(this.compareFn);
    }
  }

  /**
   * @description 队首元素出队
   * @memberof PriorityQueue
   */
  pop(number?: number) {
    if (number === undefined) {
      this.priorityQueue.shift();
    } else if (isNumber(number) && number >= 1) {
      if (number.toFixed(2).slice(-2) !== '00') {
        throw new Error('参数不合法');
      }
      for (let i = 0; i < number; i += 1) {
        this.priorityQueue.shift();
      }
    } else {
      throw new Error('参数不合法');
    }
  }

  /**
   * @description 获取队首元素
   * @memberof PriorityQueue
   */
  getFirst() {
    return this.isEmpty() ? null : this.priorityQueue[0];
  }

  /**
   * @description 获取队尾元素
   * @memberof PriorityQueue
   */
  getLast() {
    return this.isEmpty() ? null : this.priorityQueue[this.getSize() - 1];
  }

  /**
   * @description 清空队列
   * @memberof PriorityQueue
   */
  clear() {
    this.priorityQueue = [];
  }
}
