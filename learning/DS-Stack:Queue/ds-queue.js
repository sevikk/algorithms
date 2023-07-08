// Queue - data structure, add and remove
// FIFO (first in first out)
// better use Single linked list to avoid reindexing in array

// use case:
// - join game
// - background task
// - Queue stack(micro task and task )


// BIG O:
// - insertion: O(1)
// - removal:   O(1) 
// - searching: O(n)
// - access:    O(n)

let q = [];
q.push(1);
q.push(2);
q.push(3);


class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) {
            return null
        }
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;

        this.size--;
        return temp.val;
    }
    
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)