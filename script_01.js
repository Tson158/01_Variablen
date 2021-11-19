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

// let ageJohn, ageMark;
// let birthYearJohn, birthYearMark;

// let date = new Date();   //TimeStamp (Zeitstempel)
// let year = date.getFullYear();

// Wertzuweisung

// ageJohn = 25;
// ageMark = 30;

//  Berechnung

// let year = 2021;
//  birthYearJohn = year - ageJohn;
//  birthYearMark = year - ageMark;

//  Ausgabe

// console.log("birthYearJohn" + birthYearJohn);
// console.log("birthYearMark" + birthYearMark);


// Hausaufgabe *** 18.11.2021 ***

// let zahl1;
// let zahl2;  
// let ergebnis;

// zahl1 = prompt("Zahl einfügen : ");
// zahl2 = prompt("Zahl einfügen : ");
// ergebnis = (parseInt(zahl1) + parseInt(zahl2));

// console.log("Das Ergebnis ist: " + ergebnis);

// Hausaufgabe lösung Variante 1 *******
// Vorteil : gute Lesbarkeit | aber viele Variablen

// Deklaration

// let ziffer1, ziffer2;
// let zahl1, zahl2, summe;

// // Eingabe

// ziffer1 = prompt("Bitte Zahl1 einfügen");
// ziffer2 = prompt("Bitte Zahl2 einfügen");
// console.log(typeof ziffer1);
// console.log(typeof ziffer2);

// // Typkonvertierung | ziffer ---> zahl (string --> number)

// zahl1 = parseInt(ziffer1);
// zahl2 = parseInt(ziffer2);
// console.log(typeof zahl1);
// console.log(typeof zahl2);

// // Berechnung

// summe = zahl1 + zahl2;
//  console.log("Die summe ist: " + summe);

// // Variante 2 *****************
// //  Kompakte Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Bitte Zahl 1 eingeben"));
// zahl2 = parseInt(prompt("Bitte Zahl 2 eingeben"));
// summe = zahl1 + zahl2;
// console.log("Die summe ist: " + summe);


// // Variante 3 *******************

 console.log
 (
     "die Summe ist: " +
   (
       parseFloat(prompt("Bitte Zahl 1 eingeben")) +
      parseFloat(prompt("Bitte Zahl 2 eingeben"))
   )
 );