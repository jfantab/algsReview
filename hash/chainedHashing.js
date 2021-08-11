/* OPEN HASHING */
const SIZE = 10;
class Node {
    constructor(value, next = null) {
        this._value = value;
        this._next = next;
    }

    get next() {
        return this._next;
    }

    set next(node) {
        this._next = node;
    }
}

class HashTable {
    constructor() {
        this.size = SIZE;
        this.table = [];
    }

    hash(item) {
        return item % SIZE;
    }

    insert(item) {
        const key = this.hash(item);

        if (this.table[key] !== undefined) {
            const currentKey = this.table[key];
            if (this.table[key].currentKey === undefined) {
                this.table[key].currentKey = new Node(item);
            } else {
                const cur = this.table[key].currentKey;
                while (cur.next !== null) cur = cur.next;
                cur.next = new Node(item);
            }
        } else this.table[key] = { [item]: undefined };
    }

    remove(item) {
        const key = this.hash(item);
        this.table.splice(key, 1);
    }

    find(item) {
        const key = this.hash(item);
        let cur = this.table[key].currentKey;
        const ret = [key];
        let i = 0;
        while (cur != null) {
            if (cur._value === item) {
                ret.push(i);
                return ret;
            }
            cur = cur.next;
            i++;
        }
    }

    print() {
        console.log(this.table);
    }
}

const h = new HashTable();
h.insert(55);
h.insert(29);
h.insert(31);
h.insert(65);
h.insert(35);
console.log(h.find(35));
