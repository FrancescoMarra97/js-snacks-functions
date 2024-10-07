/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array 
   contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNamesByLetter(names, letter) {
    const filteredNames=[];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        
        // controlla se il nome inizia con una lettera specifica
        if (element[0]===letter) {
            filteredNames.push(element)
        }
    }
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
const result=filterNamesByLetter(names,"A");
console.log(result);



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]