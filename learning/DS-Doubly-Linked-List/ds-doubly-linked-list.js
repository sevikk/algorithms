// Complexity:
// - insertion: O(1)
// - removal:   O(1)
// - Searching: O(n)
// - Access:    O(n)


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.tail) {
            return undefined
        }
        let poppedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        let oldhead = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldhead.next;
            this.head.prev = null;
            oldhead.next = null;
        }

        this.length--;
        return oldhead;
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let count, current;
        if (index <= this.length / 2) {
            current = this.head;
            count = 0;
            while(count !== index) {
                current = current.next;
                count++
            }
            return current
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
            
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val);
        
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        
        beforeNode.next = newNode;
        newNode.prev = beforeNode
        newNode.next = afterNode;
        afterNode.prev = newNode;
        
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index === this.length -1) return this.pop()
        if (index === 0) return this.shift();

        let removedNode = this.get(index);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
        
    }
}

let list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)