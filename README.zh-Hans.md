# 数据结构与算法

[English](./README.md) | 简体中文

用 TypeScript 呈现的数据结构与算法。**更新中，不稳定，请勿用于生产环境。**

## 安装

### NPM

```shell
npm i @modyqyw/dsa
# yarn add @modyqyw/dsa
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@modyqyw/dsa/dist/index.iife.min.js"></script>
<!-- or unpkg if you prefer -->
<!-- <script src="https://unpkg.com/@modyqyw/dsa/dist/index.iife.min.js"></script> -->
```

然后就可以直接使用 `window.DSA` 了。

## 使用

```javascript
// esm
import {
  // data structure
  Stack,
  PriorityQueue,
  DoublyLinkedList,
  // algorithms
  bubbleSort,
  shakerSort
} from '@modyqyw/dsa';
// cjs
const {
  // data structure
  Stack,
  PriorityQueue,
  DoublyLinkedList,
  // algorithms
  bubbleSort,
  shakerSort
} = require('@modyqyw/dsa');

// do something with them
const stack = new Stack();
const queue = new PriorityQueue();
const list = new DoublyLinkedList();

```

## 数据结构部分

数组 Array 和字符串 String 内置，映射 Map、集合 Set 已包含在 ES6+ 标准中。

- 线性结构
  - [x] [栈/堆栈](./src/stack/index.ts)
  - [x] [优先队列](./src/priority-queue/index.ts)
  - [x] [双向链表/双链表](./src/doubly-linked-list/index.ts)
- 非线性结构
  - [ ] 无序树/自由树
  - [ ] 有序树
  - [ ] 二叉树
  - [ ] 满二叉树
  - [ ] 完全二叉树
  - [ ] 二叉搜索树/二叉查找树/二叉排序树
  - [ ] 哈夫曼树/最优二叉树
  - [ ] 平衡树/平衡二叉树
  - [ ] B 树/多路平衡搜索树
  - [ ] B+ 树
  - [ ] AVL 树/二叉平衡搜索树
  - [ ] 红黑树
  - [ ] 堆
  - [ ] 二叉最大堆
  - [ ] 二叉最小堆
  - [ ] 无向图
  - [ ] 有向图
  - [ ] 哈希表/散列表

## 算法部分

- 评估 - 时间复杂度，空间复杂度，正确性，可读性，健壮性
- 思想 - 递推法，递归法，穷举法，贪心算法，分治法，动态规划，迭代法，分支界限法，回溯法
- 分类 - 基本算法，数据结构算法，数论与代数算法，几何算法，图论算法，动态规划，数值分析，加密算法，排序算法，检索算法，随机化算法，并行算法，启发式算法
