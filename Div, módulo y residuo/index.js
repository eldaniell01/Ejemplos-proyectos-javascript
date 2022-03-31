var numeros = 100;

function generar(numeros){
    for(var i=1; i<=numeros;i++){
        if(i%3==0){
            document.write(" Fizz");
        }
        if(i%5==0){
            document.write(" Buzz");
        }
        if(i%3!=0 && i%5!=0){
            document.write(i);
        }
        document.write("<br>");
    }
}