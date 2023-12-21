const turista = prompt("Hello tourist! what is your name?");

let cidades ="";
let contagem = 0;

let continuar =prompt("Have you visited any cities? (Yes/No)");


while(continuar === "Yes"){
    let cidades = prompt ("What is the name of the city visited?")
    cidades += " - " + cidades + "\n"
    contagem ++
    continuar = prompt ("Have you visited any cities?(Yes/No)")
}

alert (
    "Tourist: " + turista + 
    "\nNumber of cities visited: " + contagem + 
    "\nCities visited \n" + cidades
)