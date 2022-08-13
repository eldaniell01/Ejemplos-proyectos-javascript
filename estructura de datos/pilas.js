class Nsode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top=null;
        this.bottom= null;
        this.length = 0;
    }

    seleccionar(){
        return this.top;
    }

    push(value){
        const nweNode = new Nsode(value);
        if(this.length===0){
            this.top = nweNode;
            this.bottom = nweNode
        }else{
            const punto = this.top;
            this.top = nweNode;
            this.top.next = punto;
        }

        this.length++;
        return this;
    }

    pop(){
        if(this.length===0){
            return null;
        }else if(this.length===1){
            this.top = null;
            this.bottom = null;
        }else{
            const tem = this.top.next;
            this.top = tem;
        }
        this.length--;
        return this;
    }
}

let myStack = new Stack();