class Node {
    constructor(value, next = null) {
        this._val = value;
        this._next = next;
    }

    get val() {
        return this._val;
    }

    get next() {
        return this._next;
    }

    set next(node) {
        this._next = node;
    }
}

const print = (node) => {
    if (node) {
        console.log(node.val);
        print(node.next);
    } else console.log("\n");
};

const reverseLinkedList = (node, prev = null) => {
    if (!node) return node;

    const nextNode = node.next;
    node.next = prev;

    return nextNode ? reverseLinkedList(nextNode, node) : node;
};

const reverseLinkedList_old = (node, prev = null) => {
    if (node) {
        const nextNode = node.next;
        node.next = prev;
        reverseLinkedList_old(nextNode, node);
        print(node);
    }
};

const n = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
console.log(reverseLinkedList(n));
