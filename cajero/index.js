
var caja=[];
var entregar =[];


caja.push(new money(50, 20));
caja.push(new money(20, 30));
caja.push(new money(10, 40));



var diner;
var div = 0;
var billetes = 0;



var cobrar = document.getElementById("cobrar");
cobrar.addEventListener("click", cobrarMoney);
var r = document.getElementById("resultado");

function cobrarMoney(){
    var v = document.getElementById("dinero");
    diner = parseInt(v.value);
    for(m of caja){
        if(diner>0){
            div= Math.floor(diner/m.valor);
            if(div>m.cantidad){
                billetes = m.cantidad;
            }else{
                billetes = div;
            }
            entregar.push(new money(m.valor, billetes));
            diner = diner-(m.valor*billetes);
        }
    }
    if(diner>0){
        
        r.innerHTML = "no hay dinero";
    }else{
        for(e of entregar){
            if(e.cantidad >0){
                r.innerHTML += e.cantidad + " billetes de: " + e.valor + "<br>";
            }
        }
    }
    
}