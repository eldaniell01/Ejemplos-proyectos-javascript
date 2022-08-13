class grafo{
    constructor(){
        this.nodo = 0;
        this.list = {};
    }
    addVertice(node){
        this.list[node] = [];
        this.nodo++;
    }

    addEdge(node1, node2){
        this.list[node1].push(node2);
        this.list[node2].push(node1);
    }

}