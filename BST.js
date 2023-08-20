class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root == null){
            this.root = newNode;
            return this; 
        }

        let temp = this.root;

        while(true){
            if(temp === newNode) return undefined;
            if(newNode.value > temp.value) {
                if(temp.right === null){
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }else{
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        let temp = this.root;
        while(temp){
            if(temp.value > value){
                temp = temp.left;
            }else if(temp.value < value) {
                temp = temp.right;
            }else{
                return true;
            }
        }
        return false;
    }

    minimum(currentNode){
        let temp = currentNode;
        while(temp.left !== null){
            temp = temp.left;
        }
        return temp;
    }

    BFS(){
       let currentNode = this.root;
       let queue = [];
       let result = [];
       
       queue.push(currentNode)

       while(queue.length){
        currentNode = queue.shift();
        result.push(currentNode.value);
        if(currentNode.left) queue.push(currentNode.left);
        if(currentNode.right) queue.push(currentNode.right);
       }
       return result;
    }
}

const bstCreate = new BST();
bstCreate.insert(60);
bstCreate.insert(40);
bstCreate.insert(30);
bstCreate.insert(50);
bstCreate.insert(100);
bstCreate.insert(80);
bstCreate.insert(90);

// console.log(bstCreate)
// console.log(bstCreate.contains(40));
// console.log(bstCreate.minimum(bstCreate.root.right));

console.log(bstCreate.BFS())