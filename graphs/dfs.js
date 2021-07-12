class Node {
  constructor(value, children = []) {
    this._value = value;
    this._children = children;
  }

  get children() {
    return this._children;
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

const checkstack = (child, stack) => {
  for (let i in stack) {
    if (stack[i]._value === child._value) return true;
  }
  return false;
};

const dfs = (node) => {
  let visited = [];
  let stack = [];

  stack.push(node);
  visited.push(node);

  while (!(stack.length === 0)) {
    let cur = stack.pop();
    if (!checkVisited(cur, visited)) visited.push(cur);

    for (let i = 0; i < cur._children.length; i++) {
      let child = cur._children[i];
      if (!checkVisited(child, visited) && !checkstack(child, stack))
        stack.push(child);
    }
    console.log(
      "stack: ",
      stack.map((node) => node._value)
    );
    console.log(
      "Visited: ",
      visited.map((node) => node._value)
    );
  }
};

const n8 = new Node(8);
const n7 = new Node(7);
const n6 = new Node(6, [n8]);
const n5 = new Node(5, []);
const n4 = new Node(4, [n7]);
const n3 = new Node(3, [n4, n6]);
const n2 = new Node(2, [n5, n6]);
const n1 = new Node(1, [n2, n3, n4]);

dfs(n1);
