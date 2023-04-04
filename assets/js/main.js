// visualizzare 5 numeri casuali in pagina
// timer 3 sec e numeri scompaiono
// utente inserisce uno ad uno i numeri che si ricorda
// software controlla quali numeri sono stati inseriti e controlla quuelli indovinati

let rNumbers = [];
let uNumbers = [];

let div = document.querySelector("main");
 
for (let i = 0; i < 5; i++){
    let generated  = Math.floor(Math.random() * 100) + 1;
    rNumbers.push(generated);
    div.innerHTML += `<div> ${generated} </div>`;
}

setTimeout (function(){
    div.innerHTML = ``;
}, 5 * 1000);

setTimeout (function() {
    for (let i = 0; i < 5; i++){
        let chosen = parseInt(prompt("Quali numeri ti ricordi?"));
        uNumbers.push(chosen);
    }
}, 2 * 1000);

