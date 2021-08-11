class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    set left(node) {
        this._left = node;
    }

    set right(node) {
        this._right = node;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }
}

class bst {
    constructor(root) {
        this.size = 1;
        this.root = root;
    }

    /* Input: an integer value, object of the Node class */
    add(val, node = this.root) {
        if (!node) {
            this.size++;
            return new Node(val);
        }
        if (val <= node.val) node.left = this.add(val, node.left);
        else if (val > node.val) node.right = this.add(val, node.right);
        return node;
    }

    repair(node) {
        if (!node) return;

        const tempRight = node.right;
        const tempLeft = node.left;
        node = tempLeft;
        if (node) {
            node.left = this.repair(tempLeft);
            node.right = tempRight;
        }
        return node;
    }

    remove(val, node = this.root) {
        if (this.size === 0) return;
        if (node.val === val) {
            this.size--;
            node = this.repair(node);
            return node;
        } else if (node.right.val === val) {
            this.size--;
            node.right = this.repair(node.right);
            return node;
        } else if (node.left.val === val) {
            this.size--;
            node.left = this.repair(node.left);
            return node;
        } else if (val < node.val) this.remove(val, node.left);
        else if (val > node.val) this.remove(val, node.right);
    }

    invert(node = this.root) {
        if (node) {
            this.invert(node.right);
            this.invert(node.left);
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            return node;
        }
    }

    /* Input: object of the Node class */
    print(node = this.root) {
        if (node) {
            console.log(node.val);
            this.print(node.left);
            this.print(node.right);
        }
    }
}

let n = new bst(new Node(15));

n.add(10);
n.add(25);
n.add(7);
n.add(11);
n.add(20);
n.add(30);
n.add(40);
n.add(5);
n.add(35);

//n.root = n.remove(15);

n.print(n.root);
console.log("\n");
n.invert(n.root);
n.print(n.root);

//console.log(n.root);
//n.print();
