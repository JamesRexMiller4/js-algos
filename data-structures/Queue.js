class Queue {
  constructor() {
    this.queue = [];
    this.head = -1;
    this.tail = -1;
  }

  enqueue(i) {
    if (this.head === -1) this.head++;
    this.tail++;
    this.queue.unshift(i);
  }

  dequeue() {
    let item;
    if (this.head === -1) throw Error('Queue Underflow');
    if (this.head === this.tail) {
      item = this.queue.pop();
      this.head -= 1;
      this.tail -= 1;
      return item;
    } else {
      this.tail -= 1;
      return this.queue.pop();
    }
  }

  size() {
    return this.queue.length;
  }

  peek() {
    if (this.head === -1) return 'Queue is empty';

    return this.queue[this.head];
  }
}

module.exports = Queue;