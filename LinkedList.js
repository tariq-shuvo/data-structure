class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const createNode = new Node(value);
        this.head = createNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }

    show(){
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
            console.log(pre);
        }
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i=0; i < index; i++){
            temp = temp.next;
        }

        return temp;
    }

    set(index, value){
        let temp = this.get(index);

        if(temp){
            temp.value = value;
            return true;
        }
        
        return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index == this.length) return this.push(value);
        if(index == 0) return this.unshift(value);
        
        const createNode = new Node(value);
        let temp = this.get(index - 1);

        createNode.next = temp.next;
        temp.next = createNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index == 0) return this.shift();
        if(index == (this.length - 1)) return this.pop();

        let pre = this.get(index - 1);
        let temp = this.get(index);

        pre.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // for(let i = 0; i < this.length; i++){
        //     let reverseValue = this.get(i);
        //     console.log(reverseValue);
        //     // reverseValue.next = this.tail;
        //     // headTemp.next = reverseValue;
        // }
    }

    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre; 
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            let prevousHeadNode = this.head;
            this.head = newNode;
            this.head.next = prevousHeadNode;
        }
        this.length++;
        return this;
    }
}

const linkedListObj = new LinkedList(4);
linkedListObj.push(10);
linkedListObj.push(20);
linkedListObj.push(30);
linkedListObj.push(40);
// linkedListObj.set(2, 50);
// linkedListObj.insert(2, 50);
// linkedListObj.remove(40);
// linkedListObj.pop();
linkedListObj.reverse();
// linkedListObj.show();
// linkedListObj.shift();
// linkedListObj.unshift(3);
// console.log(linkedListObj.get(2));
// console.log(linkedListObj);