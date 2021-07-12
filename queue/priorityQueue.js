class Queue {
  constructor() {
    this.size = 0;
    this.queue = [];
  }

  push(val) {
    this.queue.push(val);
    this.size++;
  }

  pop() {
    if (this.size === 0) return;
    this.queue.unshift();
    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    for (let i = 0; i < this.size; i++) console.log(this.queue[i]);
  }
}

let q = new Queue();
q.push(1);
q.push(2);
q.push(3);
q.pop();
q.print();
