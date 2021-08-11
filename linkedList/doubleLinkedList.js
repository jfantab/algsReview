class Node {
    constructor(value, next = null, prev = null) {
        this._val = value;
        this._next = next;
        this._prev = prev;
    }

    get val() {
        return this._val;
    }

    get next() {
        return this._next;
    }

    get prev() {
        return this._prev;
    }

    set next(node) {
        this._next = node;
    }

    set prev(node) {
        this._prev = node;
    }
}

const print = (node) => {
    if (node) {
        console.log(node.val);
        print(node.next);
    } else console.log("\n");
};

const reverseDoublyLinkedList = (node, prev = null) => {
    if (!node) return node;
    const nextNode = node.next;
    node.next = prev;
    node.prev = nextNode;
    return nextNode ? reverseDoublyLinkedList(nextNode, node) : node;
};

const reverseDoublyLinkedList_old = (node, prev = null) => {
    if (node) {
        const nextNode = node.next;
        node.next = prev;
        node.prev = nextNode;
        print(node);
        reverseDoublyLinkedList_old(nextNode, node);
    }
};

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

n2.prev = n1;
n3.prev = n2;
n4.prev = n3;
n5.prev = n4;

console.log(reverseDoublyLinkedList(n1));
