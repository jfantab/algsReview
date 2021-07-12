class Node {
  constructor(value, children = [], weights = []) {
    this._value = value;
    this._children = children;
    this._weights = weights;
  }

  get children() {
    return this._children;
  }

  get weights() {
    return this._weights;
  }

  set children(node) {
    this._children.push(node);
  }
}

const checkVisited = (child, visited) => {
  for (let i in visited) {
    if (visited[i]._value === child._value) return true;
  }
  return false;
};

const checkQueue = (child, queue) => {
  for (let i in queue) {
    if (queue[i]._value === child._value) return true;
  }
  return false;
};

const updateDistances = (distances, node, weight) => {};

const dijkstra = (start, end) => {
  const distances = new Map();
  const visited = [];
  let queue = [];

  queue.push(start);
  visited.push(start);
};

const n8 = new Node(8);
const n7 = new Node(7);
const n6 = new Node(6, [n8], [1]);
const n5 = new Node(5);
const n4 = new Node(4, [n7], [10]);
const n3 = new Node(3, [n4, n6], [3, 11]);
const n2 = new Node(2, [n5, n6], [5, 7]);
const n1 = new Node(1, [n2, n3, n4], [2, 1, 4]);

dijkstra(n1, n6);
