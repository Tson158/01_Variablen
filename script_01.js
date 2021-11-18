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

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben")
// familyName = prompt("Bitte Nachnamen eingeben");
// console.log(firstName + " " + familyName);

// JS ist eine untypisierte Sprache! | untyped

// let test;
// test = "Hey";                  //---> Strings
// test = 2;
// test = true;
// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

// const test = "hey"; // Variablen mit Konstantem Inhalt
// test = "hey du"  // KEINE neue Zuweisung nur LZ möglich!
// console.log("inhalt: " + test);

/***** Beispiel *****/

// Deklaration

let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

let date = new Date();   //TimeStamp (Zeitstempel)
let year = date.getFullYear();

// Wertzuweisung

ageJohn = 25;
ageMark = 30;

//  Berechnung

// let year = 2021;
 birthYearJohn = year - ageJohn;
 birthYearMark = year - ageMark;

//  Ausgabe

console.log("birthYearJohn" + birthYearJohn);
console.log("birthYearMark" + birthYearMark);