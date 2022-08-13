class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class singlyList{
    constructor(value){
        this.head={
            value: value,
            next:null
        }
        this.cola = this.head;
        this.lenght = 1;
    }
    append(value){
        const newNode = new Node(value);

        this.cola.next = newNode;
        this.cola = newNode;
        this.lenght++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head=newNode;
        this.lenght++;

        return this;
    }

    insert(index, value){
        if(index >= this.lenght){
            return this.append(value)
        }

        const newNode = new Node(value);
        const primerPunto = this.obtenerIndex(index -1);
        const punto = primerPunto.next;
        primerPunto.next = newNode;
        newNode = punto;

        this.lenght;
        return this;
        
    }

    obtenerIndex(index){
        let counter = 0;
        let node = this.head;
        while(counter !==index){
            node = node.next;
            counter++
        }
        return node;
    }
}

let list = new singlyList(1);