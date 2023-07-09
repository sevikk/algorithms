
/*
Trees are not linear
Trees have parent to child connections

Root - top node of Trees
Siblings - a group of nodes with same parent
Leaf - node with no children
Edge - connection between one node and another

use case:
- Folders structure
- HTML DOM
- Network routing
- Artificial inteligence

Big O complexity:
 - insertion - O(log n)
 - searching - O(log n)
 
*/




class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    // find(value) {
    //     if (!this.root) {
    //         return undefined
    //     } else {
    //         let current = this.root;
    //         while(true) {
    //             if (value == current.value) {
    //                 return current
    //             }
    //             if (value < current.value) {
    //                 if (current.left === null) return undefined;
    //                 if (current.left === value) {
    //                     return current.left
    //                 }
    //                 current = current.left
    //             } else if (value > current.value) {
    //                 if (current.rigth === null) return undefined;
    //                 if (current.right === value) {
    //                     return current.right;
    //                 }
    //                 current = current.right
    //             }
    //         }
    //     }
    // }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    // contains(value){
    //     if(this.root === null) return false;
    //     var current = this.root,
    //         found = false;
    //     while(current && !found){
    //         if(value < current.value){
    //             current = current.left;
    //         } else if(value > current.value){
    //             current = current.right;
    //         } else {
    //             return true;
    //         }
    //     }
    //     return false;
    // }


    
/*
Two ways to traverse a tree:
 - Breadth-first Search
 - Depth-first Search:
     1) PreOrder(go down starts from left)
     2) PostOrder(go up)
     3) InOrder(go from left to right)

use case:
BFS - we need to store al ot of data in queue
DFS - will use less space

Time complexity is same.

inOrder - get data sorted if Binary tree
PreOrder - clone or dublicate tree
PostOrder - 

RECAP
 - Trees are non-linear data structure that contains root and child nodes
 - Binary trees can have value of any type but at most two checldren for each parent
 - Binary Search Tree. on left less than parent value. on the right greater than parent value


*/

    BFS() {
        let data = [],
            queue = [],
            node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        function traverse (node) {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder() {
        let data = [];
        function traverse (node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder() {
        let data = [];
        function traverse (node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);