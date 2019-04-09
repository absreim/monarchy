module.exports = class Queue {
  // Queue constructor function
  constructor () {
    this.head = null
    this.tail = null
  }

  // head - front of queue
  // tail - back of queue
  // prev - pointing towards tail
  // next - pointing towards head

  // Queue.prototype.add
  add (item) {
    if (this.tail){
      this.tail = {
        value: item,
        next: this.tail,
        prev: null
      }
      this.tail.next.prev = this.tail
    }
    else {
      this.head = this.tail = {
        value: item,
        next: null,
        prev: null
      }
    }
    return this; // for chaining, do not edit
  }

  // Queue.prototype.remove
  remove () {
    if (this.head){
      const returnValue = this.head.value
      if (this.head.prev){
        this.head = this.head.prev
        this.head.next = null
      }
      else {
        this.head = this.tail = null
      }
      return returnValue
    }
    else {
      return undefined
    }
  }
  *[Symbol.iterator](){
    let currentNode = this.head
    while (currentNode){
      yield currentNode
      currentNode = currentNode.prev
    }
  }
}
