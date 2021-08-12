const MAX = Number.MAX_VALUE;

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

    set children(children) {
        this._children = children;
    }

    set weights(weights) {
        this._weights = weights;
    }
}

class PriorityQueue {
    constructor(queue = []) {
        this.size = queue.length;
        this.queue = queue;
    }

    getLeftChildIndex(P) {
        return 2 * P + 1;
    }

    getRightChildIndex(P) {
        return 2 * P + 2;
    }

    getParentIndex(C) {
        return Math.floor((C - 1) / 2);
    }

    swap(i, j) {
        const temp = this.queue[i];
        this.queue[i] = this.queue[j];
        this.queue[j] = temp;
    }

    minHeapify(index) {
        let l = this.getLeftChildIndex(index);
        let r = this.getRightChildIndex(index);

        let smallest =
            l < this.size && this.queue[l].weight < this.queue[index].weight
                ? l
                : index;

        smallest =
            r < this.size && this.queue[r].weight < this.queue[smallest].weight
                ? r
                : smallest;

        if (smallest !== index) {
            this.swap(index, smallest);
            this.minHeapify(smallest);
        }
    }

    buildMinHeap() {
        for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--)
            this.minHeapify(i);
    }

    push(obj) {
        this.queue.push(obj);
        this.size++;
        this.buildMinHeap();
    }

    pop() {
        if (this.isEmpty()) return;
        const min = this.queue[0];

        this.swap(0, this.size - 1);
        this.queue.pop();

        this.size--;
        this.buildMinHeap();

        return min;
    }

    findIndex(obj) {
        let ind = -1;
        this.queue.forEach((n, index) => {
            if (n.node._value === obj._value) ind = index;
        });
        return ind;
    }

    remove(obj) {
        const ind = this.findIndex(obj);
        this.queue.splice(ind, 1);
        this.size--;
        this.buildMinHeap();
    }

    isEmpty() {
        return this.size === 0;
    }

    getValue(index) {
        return this.queue[index];
    }

    setPrevious(index, prevNode) {
        this.queue[index].prev = prevNode;
    }

    setWeight(index, value) {
        this.queue[index].weight = value;
        this.buildMinHeap();
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
            if (!visited.includes(child) && !queue.includes(child))
                queue.push(child);
        }
    }

    return visited;
};

const dijkstra = (start, nodes) => {
    const distanceMappings = nodes.map((node) =>
        start === node
            ? { weight: 0, node, prev: {} }
            : { weight: MAX, node, prev: {} }
    );
    const visited = new PriorityQueue([]);
    const unvisited = new PriorityQueue(distanceMappings);

    console.log("Unvisited: ", unvisited.queue);
    console.log("\n\nVisited: ", visited.queue);

    while (!unvisited.isEmpty()) {
        //grab node with MIN weight in priority queue
        const cur = unvisited.getValue(0).node;

        //remove and add from appropriate priority queues
        visited.push(unvisited.getValue(0));
        unvisited.remove(cur);

        const weights = cur._weights;

        //loop through current node's children to find
        //shortest additional distance to traverse
        cur._children.forEach((child, index) => {
            if (visited.findIndex(child) === -1) {
                //grab appropriate object representations
                //of objects
                let loc = unvisited.findIndex(child);
                let loc2 = visited.findIndex(cur);

                const originalWeight = unvisited.getValue(loc).weight;
                const curWeight = visited.getValue(loc2).weight;

                const newWeight = weights[index] + curWeight;

                if (newWeight < originalWeight) {
                    //updating with new shorter distance
                    unvisited.setWeight(loc, newWeight);

                    loc = unvisited.findIndex(child);
                    unvisited.setPrevious(loc, cur);
                }
            }
        });

        console.log("\n\nUnvisited: ", unvisited.queue);
        console.log("\n\nVisited: ", visited.queue);
    }

    return visited;
};

const n8 = new Node(8);
const n6 = new Node(6, [n8], [1]);
const n7 = new Node(7, [n6], [9]);
const n5 = new Node(5);
const n4 = new Node(4, [n7], [10]);
const n3 = new Node(3, [n4, n6], [3, 11]);
const n2 = new Node(2, [n5, n6], [6, 7]);
const n1 = new Node(1, [n2, n3, n4], [2, 1, 5]);

/*
let n5 = new Node(5, [], [9, 2]);
let n4 = new Node(4, [], [1, 6, 2]);
let n3 = new Node(3, [], [5, 3, 6, 9]);
let n2 = new Node(2, [], [8, 3, 1]);
let n1 = new Node(1, [], [8, 5]);

n5.children = [n3, n4];
n4.children = [n2, n3, n5];
n3.children = [n1, n2, n4, n5];
n2.children = [n1, n3, n4];
n1.children = [n2, n3];
*/

const root = n1;
const source = n1;
const nodes = bfs(root);

dijkstra(source, nodes);
