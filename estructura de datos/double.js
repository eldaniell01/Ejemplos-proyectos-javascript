class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doubleList{
    constructor(value){
        this.head={
            value: value,
            next: null,
            prev: null
        }
        this.cola = this.head;
        this.lenght = 1;
    }
    append(value){
        const newNode = new Node(value);
        newNode.prev = this.cola;
        this.cola.next = newNode;
        this.cola = newNode;
        this.lenght++;

        return this;
    }
}

let doubleList = new doubleList(1);