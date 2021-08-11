class Heap {
    constructor(heap = []) {
        this.size = heap.length;
        this.heap = heap;
        this.buildMinHeap();
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
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    minHeapify(index) {
        console.log("Heap: ", this.heap, "\n");

        let l = this.getLeftChildIndex(index);
        let r = this.getRightChildIndex(index);

        let largest =
            l < this.size && this.heap[l] < this.heap[index] ? l : index;

        largest =
            r < this.size && this.heap[r] < this.heap[largest] ? r : largest;

        if (largest !== index) {
            this.swap(index, largest);
            this.minHeapify(largest);
        }
    }

    buildMinHeap() {
        for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--)
            this.minHeapify(i);
    }

    push(val) {
        this.heap.push(val);
        this.size++;
        this.buildMinHeap();
    }

    pop() {
        if (this.isEmpty()) return;
        const max = this.heap[0];

        this.swap(0, this.size - 1);
        this.heap.pop();

        this.size--;
        this.buildMinHeap();

        return max;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const h = new Heap([10, 8, 6, 3, 7, 1, 5, 2]);
//const h2 = new Heap([7, 12, 20, 17, 13, 30, 35, 22]);
//const h3 = new Heap([7, 12, 20, 17, 13, 30, 35, 22]);

h.pop();
h.push(20);
