//const array=["Diego", "Daniel", "Marielos"]

class Myarray{
    constructor(){
        this.length = 0;
        this.data ={};
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] =item;
        this.length++;
        return this.data;
    }
    pop(){
        const ultimoItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return ultimoItem;
    }
}

const myclass = new Myarray();
