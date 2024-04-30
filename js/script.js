let bet = prompt("scommetti se il risultato sarà pari o dispari");
let numeroutente = parseInt(prompt("inserisci un numero da 1 a 6"));
if (numeroutente <= 6) {
  alert("allora si gioca");
  let com = random();
  let somma = com + numeroutente;
  console.log(numeroutente, com, somma);

  //   controlliamo se la somma pari o dispari è uguale alla bet inserita dall'utente
  if (bet == pariOrDispari(somma)) {
    alert("vince utente");
  } else {
    console.log("vince com");
  }
} else {
  alert("numero non corretto");
}

function random() {
  let com = Math.floor(Math.random() * 6) + 1;
  console.log(com);
  return com;
}

function pariOrDispari(numero) {
  let risultato = "dispari";
  if (numero % 2 == 0) {
    risultato = "pari";
  }
  console.log(risultato);
  return risultato
}
