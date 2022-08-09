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
    del(index){
        const item = this.data[index];
        this.ind(index);
        return item;
    }

    ind(index){
        for(let i = index; i<this.length-1;i++){
            this.data[i] =this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    pushi(item){
        this.length++;
        for(let i = this.length; i>0; i--){
            this.data[i] = this.data[i-1];
        }
        this.data[0] = item;
        return this.data;
    }
}

const myclass = new Myarray();
