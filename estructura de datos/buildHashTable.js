class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash=0;
        for(let i =0; i< key.length; i++){
            hash=(hash +key.charCodeAt(i)*i)%this.date.length;
        }
        return hash;
    }
    set(key, value){
        const direccion = this.hashMethod(key);
        if(!this.data[direccion]){
            this.data[direccion] = [];
        }
        this.data[direccion].push([key, value]);
        return this.data
    }
    get(key){
        const  direccion =  this.hashMethod(key);
        const currentBucket = this.data[direccion];
        if(currentBucket){
            for(let i=0; i<currentBucket.length; i++){
                if(currentBucket[i][0]===key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const tablasha = new HashTable(50);