class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }

}

class arbolBinario{
    constructor (){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root ===null){
            this.root = newNode;
        }else{
            let tem = this.root;
            while(true){
                if(value<tem.value){
                    if(!tem.left){
                        tem.left = newNode;
                        return this;
                    }
                    tem = tem.left;
                }else{
                    if(!tem.right){
                        tem.right = newNode;
                        return this;
                    }
                    tem = tem.right;
                }
            }
        }
    }

    buscar(value, tree =  this.root){
        if(tree==null){
            return console.log("no hay");
        }else if(value>tree.value){
            return this.buscar(value, tree.right);
        }else if(value<tree.value){
            return this.buscar(value, tree.left);
        }else{
            return console.log('encontrado')
        }
    }
}

const arbol = new arbolBinario();