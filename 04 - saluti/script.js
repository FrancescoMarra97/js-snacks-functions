/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function sayHi(userName) {
    const saluto=`Ciao ${userName}`
    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console
const result=sayHi(name);
console.log(result);



//Risultato atteso se si passa 'Mario': // ciao Mario