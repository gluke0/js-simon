// visualizzare 5 numeri casuali in pagina
// timer 3 sec e numeri scompaiono
// utente inserisce uno ad uno i numeri che si ricorda
// software controlla quali numeri sono stati inseriti e controlla quuelli indovinati

let rNumbers = [];
let uNumbers = [];
let result = [];

let div = document.querySelector(".container");
 
for (let i = 0; i < 5; i++){
    let generated  = Math.floor(Math.random() * 99) + 1;
    rNumbers.push(generated);
    div.innerHTML += `<div> ${generated} </div>`;
}

setTimeout (function(){
    div.innerHTML = ``;
}, 4000);

setTimeout (function() {
    for (let i = 0; i < 5; i++){
        let chosen = parseInt(prompt("Quali numeri ti ricordi?"));
        uNumbers.push(chosen);
    };

    for (let i = 0; i < 5; i++){
    if (rNumbers[i] == uNumbers[i]){
        result.push(uNumbers[i]);
    };
};

div.innerHTML += `<span> hai fatto ${result.length} su 5: ${result}</span>`;
div.innerHTML += `<section> I numeri random: ${rNumbers} </section>` 
div.innerHTML += `<section> I tuoi numeri: ${uNumbers} </section>`

}, 5000);