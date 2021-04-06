import { bubbleSort } from '@/index';

describe('bubbleSort', () => {
  it('exception', () => {
    // @ts-ignore
    expect(() => bubbleSort()).toThrow(
      'You should pass a array as the first param.',
    );
    // @ts-ignore
    expect(() => bubbleSort([])).toThrow(
      'You should pass a function as the second param, which accepts two params and returns -1, 0 or 1.',
    );
  });

  it('simple array', () => {
    expect(
      bubbleSort([], (a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }),
    ).toStrictEqual([]);
    expect(
      bubbleSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10], (a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }),
    ).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]);
    expect(
      bubbleSort([10, 9, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0], (a, b) => {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      }),
    ).toStrictEqual([10, 9, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    expect(
      bubbleSort([8, 10, 5, 8, 6, 7, 9, 4, 3, 1, 2, 0], (a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }),
    ).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]);
    expect(
      bubbleSort([8, 10, 5, 8, 6, 7, 9, 4, 3, 1, 2, 0], (a, b) => {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      }),
    ).toStrictEqual([10, 9, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('check reference', () => {
    const array = [];
    const newArray = bubbleSort(array, (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    expect(array === newArray).toBe(false);
  });
});
