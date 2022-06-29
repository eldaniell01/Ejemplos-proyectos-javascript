// function money(coins){
//     let savec = 0;
//     savec += 0;
//     console.log(`money: ${savec}`)
// }

// money(10);


function moneybox(){
    let savec = 0;
    function count(coins){
        savec += coins;
        console.log(`money: ${savec}`);
    }
    return count;
}

const moneybox2 = moneybox();

moneybox(5);
moneybox(5);
moneybox(5);