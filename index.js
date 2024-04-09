
// Oppgave 1
// document.getElementById("convertButton").addEventListener("click", function() {
//     var tempInput = parseFloat(document.getElementById("inputTemp").value);
//     var unit = document.getElementById("unitSelect").value;
//     var resultatElement = document.getElementById("resultat");
//     var resultat;
  
//     if (isNaN(tempInput)) {
//       resultatElement.textContent = "Vennligst skriv inn en gyldig temperatur.";
//       return;
//     }
  
//     if (unit === "celsius") {
//       resultat = (tempInput * 9/5) + 32;
//       resultatElement.textContent = tempInput + " Celsius tilsvarer " + resultat + " Fahrenheit.";
//     } else {
//       resultat = (tempInput - 32) * 5/9;
//       resultatElement.textContent = tempInput + " Fahrenheit tilsvarer " + resultat + " Celsius.";
//     }
//   });

// Oppgave 2

// function genererTilfeldigeTall() {
//     return Math.floor(Math.random() * 11); // Genererer tall mellom 0 og 10
//   }
  
//   function sammenlignTall() {
//     var tall1 = genererTilfeldigeTall();
//     var tall2 = genererTilfeldigeTall();
//     var resultatElement = document.getElementById("resultat2");
  
//     if (tall1 === tall2) {
//       resultatElement.textContent = "Tallene er like: " + tall1;
//     } else if (tall1 > tall2) {
//       resultatElement.textContent = "Det første tallet er større: " + tall1;
//     } else {
//       resultatElement.textContent = "Det andre tallet er større: " + tall2;
//     }
//   }



// Oppgave 3
// function erPalindrom(tekst) {
//     tekst = tekst.toLowerCase().replace(/[^a-z0-9]/g, '');
//     var reversertTekst = tekst.split('').reverse().join('');
//     return tekst === reversertTekst;
// }

// function checkPalindrome() {
//     var inputText = document.getElementById("inputText").value;
//     var resultatElement = document.getElementById("resultat3");
    
//     if (erPalindrom(inputText)) {
//         resultatElement.textContent = "Teksten er en palindrom.";
//     } else {
//         resultatElement.textContent = "Teksten er ikke en palindrom.";
//     }
// }


// Oppgave 4
// function makeRed(elementId) {
//     var element = document.getElementById(elementId);
//     element.classList.remove("blue");
//     element.classList.add("red");
//   }
  
//   function makeBlue(elementId) {
//     var element = document.getElementById(elementId);
//     element.classList.remove("red");
//     element.classList.add("blue");
//   }
  
//   function randomColor() {
//     var divs = document.querySelectorAll("div");
//     var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     divs.forEach(function(div) {
//       div.style.backgroundColor = randomColor;
//     });
//   }

// Oppgave 5

// function drawRectangle() {
//     var width = parseInt(document.getElementById("widthInput").value);
//     var height = parseInt(document.getElementById("heightInput").value);
//     var rectangle = '';

//     if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
//         document.getElementById("rectangleOutput").textContent = "Invalid input. Please enter positive numbers.";
//         return;
//     }

//     for (var i = 0; i < height; i++) {
//         for (var j = 0; j < width; j++) {
//             if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
//                 rectangle += '*';
//             } else {
//                 rectangle += ' ';
//             }
//         }
//         rectangle += '\n';
//     }

//     document.getElementById("rectangleOutput").textContent = rectangle;
// }

// Oppgave 6

//   function changeColor() {
//     var color = document.getElementById("colorInput").value;
//     document.body.style.backgroundColor = color; }
