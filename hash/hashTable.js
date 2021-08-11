/* OPEN HASHING */
const SIZE = 10;
class HashTable {
    constructor() {
        this.size = SIZE;
        this.table = [];
        for (let i = 0; i < SIZE; i++) this.table.push(undefined);
    }

    hash(item) {
        return item % SIZE;
    }

    insert(item) {
        let key = this.hash(item);

        // linear hashing
        while (this.table[key] !== undefined) key = (key + 1) % SIZE;

        //double hashing

        // quadratic probing
        let i = 0;
        while (this.table[key] !== undefined)
            key = (key + Math.pow(i++, 2)) % SIZE;

        this.table[key] = item;
    }

    remove(item) {
        const key = this.hash(item);
        this.table.splice(key, 1);
    }

    find(item) {
        const key = this.hash(item);
        return this.table[key] === item;
    }

    print() {
        console.log(this.table);
    }
}

const h = new HashTable();
h.insert(31);
h.insert(42);
h.insert(33);
h.insert(55);
h.insert(35);
h.insert(17);
h.insert(88);
h.insert(29);
h.insert(66);
h.insert(48);
h.print();
//console.log(h.find(55));
//console.log(h.find(115));
