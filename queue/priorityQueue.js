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
    if (this.heap[index] > this.heap[parent]) index = parent;

    console.log("Before heapifying: ", this.heap);

    let rightChild, leftChild, largerChild;
    do {
      rightChild = this.getRightChildIndex(index);
      leftChild = this.getLeftChildIndex(index);
      if (rightChild >= this.size) this.swap(leftChild, index);
      else if (leftChild >= this.size) this.swap(rightChild, index);
      else {
        largerChild =
          this.heap[rightChild] >= this.heap[leftChild]
            ? rightChild
            : leftChild;
        this.swap(largerChild, index);
      }

      index = this.getParentIndex(index);
    } while (
      this.heap[index] <= this.heap[this.getRightChildIndex(index)] ||
      this.heap[index] <= this.heap[this.getLeftChildIndex(index)]
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

    if (this.heap[rightChild] >= this.heap[index]) this.swap(rightChild, index);
    if (this.heap[leftChild] >= this.heap[index]) this.swap(leftChild, index);

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
    const maxEle = this.heap.shift();
    this.size--;
    this.balanceHeapAtHead();
    return maxEle;
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

  getMaxElement() {
    return this.queue.heap[0];
  }

  addMaxElement(val) {
    this.queue.push(val);
    this.size++;
  }

  removeMaxElement() {
    return this.queue.pop();
    this.size--;
  }

  print() {
    console.log(this.queue);
  }
}

const q = new PriorityQueue([10, 8, 6, 3, 7, 1, 5, 2]);
q.addMaxElement(20);
q.print();
console.log("\n\n");
console.log(q.getMaxElement());
