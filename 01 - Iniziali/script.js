/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getIinitial(listNames) {
    const iniziali=[] //iniziallizzo l'array per le iniziali

    //scorrere nell'array 
    for (let i = 0; i < listNames.length; i++) {
        const element = listNames[i];
        //accedo al primo carattere della stringa
        const initial = element[0];
        //invio le iniziali nell'array 
        iniziali.push(initial);
    }
    return iniziali;
}

// Invoca la funzione qui e stampa il risultato in console
const result=getIinitial(names)
console.log(result);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]