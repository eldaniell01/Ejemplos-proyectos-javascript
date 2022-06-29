function greeting(){
    let username = 'hola';
    function display(){
        return `hola ${username}`;
    }
    return display;
}

const g = greeting();
console.log(g);
console.log(g());