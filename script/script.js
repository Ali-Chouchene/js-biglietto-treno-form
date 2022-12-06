/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:


/* NOME E COGNOME */
const inputName = document.getElementById("inputname");
const outputName = document.getElementById("name");
const genera = document.getElementById("invio");

/*************************************************************** */

/* CALCOLO PREZZO PER ETà*/

const adulto = document.getElementById("adulto");
const minorenne = document.getElementById("minorenne");
const over = document.getElementById("over");
const inputKm = document.getElementById("inputkm");
const randomCar = document.getElementById("randomcar");
const randomCode = document.getElementById("randomcode");
const sconto = document.getElementById("discount");
const result = document.getElementById("price");
const age = document.getElementById("age");

// if (adulto) {
//     result = normalPrice;
//     sconto = (normalPrice * 0)

// } else if (minorenne) {
//     sconto = (normalPrice * 0.2)
//     result = (normalPrice - sconto)

// } else if (over) {
//     sconto = (normalPrice * 0.4)
//     result = (normalPrice - sconto)
// }


/**STAMPARE con bottone */

genera.addEventListener("click", function () {
    const text = inputName.value.trim();
    if (!text) {
        outputName.innerText = "";
    } else {
        outputName.innerText = text;
    }

    inputName.value = "";
    /*numero carrozza*/
    let y = Math.floor((Math.random() * 10) + 1);
    randomCar.innerText = y;
    /*numero biglietto*/
    let i = Math.floor((Math.random() * 1000000) + 1);
    randomCode.innerText = i;


    /*prezzo*/

    const x = 0.21;
    const normalPrice = (inputKm * x);



    if (age === adulto) {
        result.innerText = normalPrice;
        let sconto = (normalPrice * 0)

    } else if (age === minorenne) {
        let sconto = (normalPrice * 0.2)
        result = (normalPrice - sconto)

    } else if (age === over) {
        let sconto = (normalPrice * 0.4)
        result = (normalPrice - sconto)
    }

    /*offerta*/



});









// //.4
//

// //.5


// //.6

// //price
// targetPrice.innerText = `${result.toFixed(2)}`;
// //age
// targetAge.innerText = `${userAge} `;
// //km
// targetKm.innerText = `${userKm} `;
// //sconto
// targetSold.innerText = `${sconto.toFixed(2)}`;