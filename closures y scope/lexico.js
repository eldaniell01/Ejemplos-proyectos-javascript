const myglobal =0;
function myFunction(){
    const mynumbre = 1;
    console.log(myglobal);
    function parent(){
        const inner= 2;
        console.log(mynumbre, myglobal);
        function child(){
            console.log(inner, mynumbre, myglobal);
        }
        return child();
    }
    return parent();
}

myFunction();