class LinkedList  {
  constructor() {
    this.head = this.tail = null;
  }

  append(value)  {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else  {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  prepend(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value)
    } else  {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    if(!this.head)  {
      return null
    } else{
      let removedHead = this.head;
      if  (this.head === this.tail) {
        this.head = this.tail = null;
      } else  {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }

  deleteTail() {
    if  (!this.tail)  {
      return null;
    }else {
      let removedTail = this.tail;
      if  (this.head === this.tail) {
        this.head = this.tail = null;
      } else  {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value)  {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
}

class Node  {
  constructor(value, prev, next)  {
    this.value = value;
    this.prev = prev || null;
    this.next  = next || null;
  }
}
