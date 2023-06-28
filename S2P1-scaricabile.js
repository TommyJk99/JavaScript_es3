//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 20;
let b = 21;

if (a == b) {
  console.log("ES1 a=b");
} else {
  if (a > b) {
    console.log("ES1 a>b");
  } else {
    console.log("ES1 a<b");
  }
}
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let num = 0; num < 21; num++) {
  if (num < 5) {
    console.log(`ES2 Numero: ${num} Tiny`);
  }
  if (5 <= num && num < 10) {
    console.log(`ES2 Numero: ${num} Small`);
  }
  if (10 <= num && num < 15) {
    console.log(`ES2 Numero: ${num} Medium`);
  }
  if (15 <= num && num < 20) {
    console.log(`ES2 Numero: ${num} Large`);
  }
  if (num >= 20) {
    console.log(`ES2 Numero: ${num} Huge`);
  }
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 11; i++) {
  if (i !== 3 && i !== 8) {
    console.log(`ES3 ${i}`);
  }
}
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`ES11 ${i} è un numero pari`);
  } else {
    console.log(`ES11 ${i} è un numero dispari`);
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let c = 8;
let d = 0;

if (c == 8 || d == 8) {
  console.log("EX1 Il valore di uno dei due numeri è 8");
}

if (c + d == 8) {
  console.log("EX1 La somma dei due numeri è pari a 8");
}

if (c - d == 8 || d - c == 8) {
  console.log("EX1 La differenza dei due numeri è pari a 8");
}
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 40;

if (totalShoppingCart <= 50) {
  totalShoppingCart = totalShoppingCart + 10;
}
console.log(`EX2 Il prezzo da pagare è di ${totalShoppingCart} euro`);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 50;

if (totalShoppingCart <= 50) {
  totalShoppingCart = totalShoppingCart + 10;
}
console.log(
  `EX3 Il prezzo da pagare è di ${
    totalShoppingCart - (20 * totalShoppingCart) / 100
  } euro`
);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = false;
let gender = isMale ? "male" : "female";
console.log("EX4 Gender:", gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
