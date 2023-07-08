// Stack - abstract data structure, data collection
// LIFO principal (last in first out) 

// use case:
// - call stack
// - undo/redo
// - routing

// BIG O
// insertion: O(1)
// removal:   O(1)
// Searching: O(n)
// Access:    O(n)

// let stack = [];
// push and pop
// unshift and shift

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        
    }

    push(val) {
        let node = new Node(val)
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;
        this.size--;
        return temp.val
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)