/***** Variablen 01 *******/

/**
 * 
 * Block Kommentar
 */

// Zeilen Kommentar

//  Konsolen ausgabe
// console.log("Hey Ho!"); // eigentlich Hello world
// console.log(firstName); // nicht deklarierte variable ---> Fehler

/****** 02 Deklaration + Wertzuweisung ********/

// let firstName;  // Deklaration (Definition)
// firstName = "Max";  // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName);    // Ausgabe
// console.log(firstName + " " + familyName);

/****** 03 Deklaration + Wertzuweisung II ********/

let firstName, familyName;
firstName = prompt("Bitte Vornamen eingeben")
familyName = prompt("Bitte Nachnamen eingeben");
console.log(firstName + " " + familyName);
