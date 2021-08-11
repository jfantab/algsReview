class Heap {
  constructor(heap = []) {
    this.size = heap.length;
    this.heap = heap;
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
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  balanceHeapAtIndex(index) {
    const parent = this.getParentIndex(index);
    if (this.heap[index] < this.heap[parent]) index = parent;

    console.log("Before heapifying: ", this.heap);

    let rightChild, leftChild, largerChild;
    do {
      rightChild = this.getRightChildIndex(index);
      leftChild = this.getLeftChildIndex(index);
      if (rightChild >= this.size) this.swap(leftChild, index);
      else if (leftChild >= this.size) this.swap(rightChild, index);
      else {
        largerChild =
          this.heap[rightChild] <= this.heap[leftChild]
            ? rightChild
            : leftChild;
        this.swap(largerChild, index);
      }

      index = this.getParentIndex(index);
    } while (
      this.heap[index] >= this.heap[this.getRightChildIndex(index)] ||
      this.heap[index] >= this.heap[this.getLeftChildIndex(index)]
    );

    console.log("Heapified: ", this.heap);
  }

  balanceHeapAtHead(index = 0) {
    console.log(this.heap);
    if (index >= this.size) {
      console.log("Heapified: ", this.heap);
      return;
    }

    let rightChild = this.getRightChildIndex(index);
    let leftChild = this.getLeftChildIndex(index);

    if (this.heap[rightChild] <= this.heap[index]) this.swap(rightChild, index);
    if (this.heap[leftChild] <= this.heap[index]) this.swap(leftChild, index);

    this.balanceHeapAtHead(rightChild);
    this.balanceHeapAtHead(leftChild);
  }

  push(val) {
    this.heap.push(val);
    this.size++;
    this.balanceHeapAtIndex(this.size - 1);
  }

  pop() {
    if (this.isEmpty()) return;
    this.heap.shift();
    this.size--;
    this.balanceHeapAtHead();
  }

  isEmpty() {
    return this.size === 0;
  }
}

class PriorityQueue {
  constructor(queue = []) {
    this.size = queue.length;
    this.queue = new Heap(queue);
  }

  push(val) {
    this.queue.push(val);
    this.size++;
  }

  getValue(index) {
    return this.queue.heap[index];
  }

  setValue(index, val) {
    this.queue.heap[index] = val;
    this.queue.balanceHeapAtIndex(index);
  }

  getMinElement() {
    return this.size === 0 ? -1 : this.queue.heap[0];
  }

  addMinElement(val) {
    this.queue.push(val);
    this.size++;
  }

  removeMinElement() {
    if (this.size === 0) return -1;
    const minEle = this.queue.pop();
    this.size--;
    return minEle;
  }

  print() {
    console.log(this.queue);
  }
}

const h = new PriorityQueue([7, 12, 20, 17, 13, 30, 35, 22]);

h.push(14);
h.setValue(8, 9);
