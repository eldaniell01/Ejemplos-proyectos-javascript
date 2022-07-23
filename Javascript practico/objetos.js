
var usuario ={
    name: "daniel",
    lastname: "montepeque",
    age: 25
}

function objeto(obj){
    for(let key in obj){
        console.log(obj[key])
    }
}
objeto(usuario)