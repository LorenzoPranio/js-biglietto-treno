//KM da percorrere
let kilometri = prompt('Inserisci i kilometri che devi percorrere');
//Età 
let age = prompt('Inserisci la tua età');
//Prezzo biglietto
let prezzo_biglietto = 0.21 * kilometri;
//Sconto
let sconto = 0;
//if
if (age < 18){
    sconto = 20;
}
else if (age > 65){
    sconto = 40;
}
//Prezzo finale
let prezzo_finale = prezzo_biglietto - (prezzo_biglietto * sconto / 100);

document.getElementById('prezzo_finale').innerHTML = prezzo_finale.toFixed(2) + '&euro;'
