import { PriorityQueue } from '@/priority-queue';

describe('PriorityQueue 01', () => {
  const priorityQueue = new PriorityQueue<string | number>();

  it('initial state', () => {
    expect(() => {
      // @ts-ignore
      const queue = new PriorityQueue<string | number>(null);
    }).toThrow(
      'You should pass a function as the only param, which accepts two params and returns -1, 0 or 1.',
    );
    expect(priorityQueue.getSize()).toBe(0);
    expect(priorityQueue.isEmpty()).toBe(true);
    expect(priorityQueue.getFirst()).toBeNull();
    expect(priorityQueue.getLast()).toBeNull();
    expect(priorityQueue.pop()).toBeUndefined();
    expect(priorityQueue.pop(1)).toBeUndefined();
  });

  it('push nothing', () => {
    expect(() => priorityQueue.push()).toThrow(
      'You need to provide an element.',
    );
  });

  it('pop float', () => {
    expect(() => priorityQueue.pop(1.3)).toThrow('Invalid param.');
    expect(() => priorityQueue.pop(0.3)).toThrow('Invalid param.');
  });

  it('push one element', () => {
    expect(priorityQueue.push('test')).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(1);
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.getFirst()).toBe('test');
    expect(priorityQueue.getLast()).toBe('test');
  });

  it('push other three elements', () => {
    expect(priorityQueue.push(10, 5, 20)).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(4);
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.getFirst()).toBe('test');
    expect(priorityQueue.getLast()).toBe(20);
  });

  it('clear', () => {
    expect(priorityQueue.clear()).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(0);
    expect(priorityQueue.isEmpty()).toBe(true);
    expect(priorityQueue.getFirst()).toBeNull();
    expect(priorityQueue.getLast()).toBeNull();
  });
});

describe('PriorityQueue 02', () => {
  const priorityQueue = new PriorityQueue<string | number>(
    (a: string | number, b: string | number) => {
      const typeA = typeof a;
      const typeB = typeof b;
      if (typeA === 'string' && typeB === 'string') {
        const tmpA = (a as string).toUpperCase();
        const tmpB = (b as string).toUpperCase();
        if (tmpA < tmpB) {
          return -1;
        }
        if (tmpA > tmpB) {
          return 1;
        }
        return 0;
      }
      if (typeA === 'string' && typeB !== 'string') {
        return -1;
      }
      if (typeA !== 'string' && typeB === 'string') {
        return 1;
      }
      if (typeA !== 'string' && typeB !== 'string') {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
      return 0;
    },
  );

  it('push one element', () => {
    expect(priorityQueue.push('test')).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(1);
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.getFirst()).toBe('test');
    expect(priorityQueue.getLast()).toBe('test');
  });

  it('push other three elements', () => {
    expect(priorityQueue.push(10, 5, 20)).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(4);
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.getFirst()).toBe('test');
    expect(priorityQueue.getLast()).toBe(20);
  });
});

describe('PriorityQueue 03', () => {
  const priorityQueue = new PriorityQueue<string | number>(
    (a: string | number, b: string | number) => {
      const typeA = typeof a;
      const typeB = typeof b;
      if (typeA === 'string' && typeB === 'string') {
        const tmpA = (a as string).toUpperCase();
        const tmpB = (b as string).toUpperCase();
        if (tmpA < tmpB) {
          return 1;
        }
        if (tmpA > tmpB) {
          return -1;
        }
        return 0;
      }
      if (typeA === 'string' && typeB !== 'string') {
        return 1;
      }
      if (typeA !== 'string' && typeB === 'string') {
        return -1;
      }
      if (typeA !== 'string' && typeB !== 'string') {
        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
      }
      return 0;
    },
  );

  it('push one element', () => {
    expect(priorityQueue.push('test')).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(1);
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.getFirst()).toBe('test');
    expect(priorityQueue.getLast()).toBe('test');
  });

  it('push other three elements', () => {
    expect(priorityQueue.push(10, 5, 20)).toBeUndefined();
    expect(priorityQueue.getSize()).toBe(4);
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.getFirst()).toBe(20);
    expect(priorityQueue.getLast()).toBe('test');
  });
});
