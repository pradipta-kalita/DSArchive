class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = null;
    this.size = 0;
  }

  print() {
    if (this.size === 0) console.log("empty stack");
    let temp = this.top;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  clear() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.size--;
    return temp.value;
  }
}

module.exports = Stack;
