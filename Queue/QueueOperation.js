class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value){
        const createQueueNode = new Node(value);
        this.top = createQueueNode;
        this.bottom = this.top;
        this.length = 1;
    }

    enqueue(value){
        const createQueueNode = new Node(value);
        if(!this.top){
            this.top = createQueueNode;
            this.bottom = this.top;
        }else{
            this.bottom.next = createQueueNode;
            this.bottom = createQueueNode;
        }
        this.length++;
    }

    dequeue(){
        if(this.length == 0) return undefined;
        let temp = this.top;
        if(this.length == 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = temp.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

const queueObj = new Queue(10);
queueObj.enqueue(20);
queueObj.enqueue(30);
queueObj.enqueue(40);
queueObj.dequeue();
console.log(queueObj);