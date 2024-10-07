/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getIinitial(listNames) {
    //scorrere nell'array 
    for (let i = 0; i < listNames.length; i++) {
        const element = listNames[i];
        //accedo al primo carattere della stringa
        const initial = element[0];
    }
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]