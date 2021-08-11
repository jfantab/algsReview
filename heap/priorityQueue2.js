class PriorityQueue {
    constructor(queue = []) {
        this.size = queue.length;
        this.queue = queue;
        this.buildMaxHeap();
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

    maxHeapify(index) {
        console.log("Queue: ", this.queue, "\n");

        let l = this.getLeftChildIndex(index);
        let r = this.getRightChildIndex(index);

        let largest =
            l < this.size && this.queue[l] > this.queue[index] ? l : index;

        largest =
            r < this.size && this.queue[r] > this.queue[largest] ? r : largest;

        if (largest !== index) {
            this.swap(index, largest);
            this.maxHeapify(largest);
        }
    }

    buildMaxHeap() {
        for (let i = Math.floor((this.size - 2) / 2); i >= 0; i--)
            this.maxHeapify(i);
    }

    push(val) {
        this.queue.push(val);
        this.size++;
        this.buildMaxHeap();
    }

    removeMaxElement() {
        if (this.isEmpty()) return;
        const max = this.getMaxElement();

        this.swap(0, this.size - 1);
        this.queue.pop();

        this.size--;
        this.buildMaxHeap();

        return max;
    }

    isEmpty() {
        return this.size === 0;
    }

    getMaxElement() {
        return this.isEmpty() ? -1 : this.queue[0];
    }
}

const h = new PriorityQueue([7, 12, 20, 17, 13, 30, 35, 22]);

//h.push(14);
//h.removeMaxElement();
h.push(23);
