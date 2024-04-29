let bet = prompt("scommetti se il risultato sarà pari o dispari");
let numeroutente = parseInt(prompt("inserisci un numero da 1 a 6"));
numeroutente <= 6;
let com = random();
let somma = com + numeroutente;
let pari = somma % 2 == 0;
let dispari = somma % 2 == 1;
console.log(numeroutente);
function random() {
  let com = Math.floor(Math.random() * 6) + 1;
  console.log(com);
  return com;
}

if ((bet = "pari")) {
  console.log("vince user");
} else if ((bet = "dispari")) {
  console.log("vince user");
} else {
    bet != "pari";
    bet != "dispari";
  console.log("vince com");
}
