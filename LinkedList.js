// Node class
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // Append value to end of list
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  // Prepend value to start of list
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  // Return size of list
  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Return head node
  head() {
    return this.headNode;
  }

  // Return tail node
  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Return node at given index
  at(index) {
    if (index < 0) return null;
    let current = this.headNode;
    let count = 0;

    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }

    return null;
  }

  // Remove last element
  pop() {
    if (!this.headNode) return;
    if (!this.headNode.nextNode) {
      this.headNode = null;
      return;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // Check if list contains value
  contains(value) {
    let current = this.headNode;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  // Return index of value (or null if not found)
  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  // Represent the list as a string
  toString() {
    let current = this.headNode;
    let str = "";
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += "null";
    return str;
  }

  // Extra credit: insert at specific index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const prev = this.at(index - 1);
    if (!prev) {
      console.error("Index out of bounds");
      return;
    }

    const newNode = new Node(value, prev.nextNode);
    prev.nextNode = newNode;
  }

  // Extra credit: remove at specific index
  removeAt(index) {
    if (index === 0) {
      if (this.headNode) this.headNode = this.headNode.nextNode;
      return;
    }

    const prev = this.at(index - 1);
    if (!prev || !prev.nextNode) {
      console.error("Index out of bounds");
      return;
    }

    prev.nextNode = prev.nextNode.nextNode;
  }
}

export { LinkedList, Node };
