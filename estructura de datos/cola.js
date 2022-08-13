class Node{
    constructor(value){
        this.top = value;
        this.next = null;
    }
}
class Cola{
    constructor(){
        this.top=null;
        this.bottom= null;
        this.length = 0;
    }

    seleccionar(){
        return this.top;
    }

    encolar(value){
        const nweNode = new Node(value);
        if(this.length===0){
            this.top = nweNode;
            this.bottom = nweNode
        }else{
            this.bottom.next = nweNode;
            this.bottom = nweNode;
        }

        this.length++;
        return this;
    }

    desencolar(){
        if(this.length===0){
            return null;
        }else if(this.length===1){
            this.top=null;
            this.bottom=null;
        }else{
            const tem = this.top.next;
            this.top = tem;
        }

        this.length--;
        return this;
    }
}

let myCola= new Cola();