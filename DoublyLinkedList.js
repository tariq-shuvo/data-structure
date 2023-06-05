class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        const createNode = new Node(value);
        this.head = createNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const createNode = new Node(value);
        
        if(!this.head){
            this.head = createNode;
            this.tail = this.head;
        }else{
            createNode.prev = this.tail;
            this.tail.next = createNode;
            this.tail = createNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length == 0) return undefined;

        let temp = this.tail;
        if(this.length  == 1){
            this.head = null;
            this.tail = this.head;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    unshift(value){
        const createNode = new Node(value);

        if(!this.head){
            this.head = createNode;
            this.tail = this.head;
        }else{
            createNode.next = this.head;
            this.head.prev = createNode;
            this.head = createNode;
        }

        this.length++;
        return this;
    }

    shift() {
        if(this.length == 0) return undefined;

        let temp = this.head;
        if(this.length  == 1){
            this.head = null;
            this.tail = this.head;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;

        let temp=this.head;
        if(index < this.length/2){
            for(let i=0; i < index; i++)
            {
                temp = temp.next;
            }
        }else{
            temp = this.tail;
            for(let i=this.length-1; i > index; i--)
            {
                temp = temp.prev;
            } 
        }
        
        return temp;
    }

    show() {
        let temp = this.head;
        console.log(temp);
        while(temp.next)
        {
            temp = temp.next;
            console.log(temp);
        }
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp){
            temp.value = value
            return true;
        }
        
        return false;
    }

    insert(index, value) {
        if(index == 0) this.unshift(value);
        if(index == this.length) this.push(value);

        const createNode = new Node(value);
        let temp = this.get(index);
        let prev = temp.prev;
        if(temp){
            createNode.prev = prev;
            createNode.next = temp;
            temp.prev = createNode;
            prev.next = createNode;
            return true;
        }
        
        this.length++;
        return false;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;

        if(index == 0) this.shift(value);
        if(index == this.length) this.pop(value);

        let temp = this.get(index);
        let prev = temp.prev;
        let next = temp.next;

        prev.next = next;
        next.prev = prev;

        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }
}

const doublyLinkedListObj = new DoublyLinkedList(56);
doublyLinkedListObj.push(60);
doublyLinkedListObj.push(70);
doublyLinkedListObj.push(80);
doublyLinkedListObj.push(90);
// doublyLinkedListObj.insert(2, 85);
// doublyLinkedListObj.pop();
// doublyLinkedListObj.unshift(78);
// doublyLinkedListObj.shift();
doublyLinkedListObj.remove(2);
console.log(doublyLinkedListObj.show());