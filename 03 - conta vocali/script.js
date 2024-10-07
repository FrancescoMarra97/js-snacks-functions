/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function findVowels(inputString){
    const foundVowels=[]; //inizializzo un array vuoto per le vocali
    const vowels = "aeiou" //definisco le vocali
    for (let i = 0; i < inputString.length; i++) {
        const element = inputString[i];
        
        //controllo se è una vocale
       if (vowels.includes(element)) {
        foundVowels.push(element)
       }
       return foundVowels;
}

// Invoca la funzione qui e stampa il risultato in console
const result=findVowels(word);
console.log(result);

}

//Risultato atteso se si passa javascript: 3 (a, a, i)