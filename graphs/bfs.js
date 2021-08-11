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

const bfs = (node) => {
  let visited = [];
  let queue = [];

  queue.push(node);
  visited.push(node);

  while (!(queue.length === 0)) {
    let cur = queue.shift();
    if (!visited.includes(cur)) visited.push(cur);

    for (let i = 0; i < cur._children.length; i++) {
      let child = cur._children[i];
      if (!visited.includes(child) && !queue.includes(child)) queue.push(child);
    }

    console.log(
      "Queue: ",
      queue.map((node) => node._value)
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

bfs(n1);
