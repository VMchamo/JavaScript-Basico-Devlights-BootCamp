/* BootCamp Devlights - Curso React y NodeJS
 Tarea 1 - JavaScript Basico - Ejercicios de FreeCodeCamp */



// Ejercicio 1 - "Comenta tu código de JavaScript"
//Solucion: 

// Esto es un comentario de una linea.

/* Esto
   es un
   comentario
   de varias
   lineas */

// ------------------------------------------------------

// Ejercicio 2 - "Declara variables de JavaScript"
//Solucion :
var ourName;

// ------------------------------------------------------

// Ejercicio 3 - "Almacenar valores con el operador de asignación"
// Solucion : 
var a = 7;

// ------------------------------------------------------
// Ejercicio 3 - "Asigna el valor de una variable a otra variable"
//Solucion:
var a;
a = 7;
var b;
b = a

// ------------------------------------------------------
// Ejercio 4 - "Inicializa variables con el operador de asignación"
// Solucion:
var a = 9;

// ------------------------------------------------------
// Ejercio 5 - "Declara variables de cadena"
// Solucion :
var myFirstName = "Manuel"
var myLastName = "Chamorro"

// ------------------------------------------------------
// Ejercicio 6 - "Comprendiendo las variables no inicializadas"
// Solucion : 
var a = 5;
var b = 10;
var c = "I am a";

// ------------------------------------------------------
// Ejercicio 7 - "Comprendiendo la sensibilidad de mayúsculas en las variables"
// Solucion :
// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// -----------------------------------------------------
// Ejercicio 8 - "Explora las diferencias entre las palabras claves var y let"
// Solucion : 
let catName = "Oliver";
let catSound = "Meow!";

// -----------------------------------------------------
// Ejercicio 9 - "Declara una variable de solo lectura con la palabra clave const"
// Solucion : 
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 

// -----------------------------------------------------
// Ejercicio 10 - "Suma dos números con JavaScript"
// Solucion :
const sum = 10 + 10;

// -----------------------------------------------------
// Ejercicio 11 - "Resta un número de otro con JavaScript"
// Solucion :
const difference = 45 - 33;

// -----------------------------------------------------
// Ejercicio 12 - "Multiplica dos números con JavaScript"
// Solucion : 
const product = 8 * 10;

// -----------------------------------------------------
// Ejercicio 13 - "Divide un número entre otro con JavaScript"
// Solucion :
const quotient = 66 / 33;

// -----------------------------------------------------
// Ejercicio 14 - "Incrementa un número con JavaScript"
// Solucion : 
let myVar = 87;
myVar++;

// -----------------------------------------------------
// Ejercicio 15 - "Decrementa un número con JavaScript"
// Solucion : 
let myVar = 11;
myVar--;

// -----------------------------------------------------
// Ejercicio 16 - "Crea números decimales con JavaScript"
// Solucion :
const myDecimal = 1.2

// -----------------------------------------------------
// Ejercicio 17 - "Multiplica dos números decimales con JavaScript"
// Solucion : 
const product = 2.0 * 2.5;

// -----------------------------------------------------
// Ejercicio 18 - "Divide un decimal entre otro con JavaScript"
// Solucion : 
const quotient = 4.4 / 2.0; 

// -----------------------------------------------------
// Ejercicio 19 - "Encuentra un resto en JavaScript"
// Solucion : 
const remainder = 11 % 3; 

// -----------------------------------------------------
// Ejercicio 20 - "Asignación compuesta con adición aumentada"
// Solucion : 
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// -----------------------------------------------------
// Ejercicio 21 - "Asignación compuesta con resta aumentada"
// Solucion : 
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// -----------------------------------------------------
// Ejercicio 22 - "Asignación compuesta con multiplicación aumentada"
// Solucion : 
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// -----------------------------------------------------
// Ejercicio 23 - "Asignación compuesta con división aumentada"
// Solucion : 
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// -----------------------------------------------------
// Ejercicio 24 - "Escapa comillas literales en cadenas"
// Solucion : 
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// -----------------------------------------------------
// Ejercicio 25 - "Cita cadenas con comillas simples"
// Solucion : 
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// -----------------------------------------------------
// Ejercicio 26 - "Escapa secuencias en cadenas"
// Solucion : 
const myStr ="FirstLine\n\t\\SecondLine\nThirdLine";

// -----------------------------------------------------
// Ejercicio 27 - "Concatena cadenas con el operador "más""
// Solucion :
const myStr = "This is the start. " + "This is the end.";

// -----------------------------------------------------
// Ejercicio 28 - "oncatena cadenas con el operador "más igual""
// Solucion : 
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// -----------------------------------------------------
// Ejercicio 29 - "Construye cadenas con variables"
// Solucion : 
const myName = "Manuel";
const myStr = "My name is " + myName + "And I am well!";

// -----------------------------------------------------
// Ejercicio 30 - "Agrega variables a cadenas"
// Solucion : 
const someAdjective = "god";
let myStr = "Learning to code is ";
myStr += someAdjective;

// -----------------------------------------------------
// Ejercicio 31 - "Encuentra la longitud de una cadena"
// Solucion : 
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// -----------------------------------------------------
// Ejercicio 32 : "Utiliza la notación de corchetes para encontrar el primer carácter en una cadena"
// Solucion : 
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// -----------------------------------------------------
// Ejercicio 33 : "Comprende la inmutabilidad de las cadenas"
// Solucion : 
let myStr = "Jello World";
myStr = "Hello World"; 

// -----------------------------------------------------
// Ejercicio 34 : "Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena"
// Solucion : 
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// -----------------------------------------------------
// Ejercicio 35 : "Utiliza la notación de corchetes para encontrar el último carácter en una cadena"
// Solucion : 
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// -----------------------------------------------------
// Ejercicio 36 : "Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena"
// Solucion : 
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// -----------------------------------------------------
// Ejercicio 37 : "Palabra en blanco"
// Solucion : 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb ;

// -----------------------------------------------------
// Ejercicio 38 : "Almacena múltiples valores en una variable utilizando los arreglos de JavaScript"
// Solucion : 
const myArray = ["Manuel", 26];

// -----------------------------------------------------
// Ejercicio 39 : "Anida un arreglo dentro de otro arreglo"
// Solucion :
const myArray = [["Manuel", 26], ["Enero", 5]];

// -----------------------------------------------------
// Ejercicio 40 : "Accede a los datos de un arreglo con índices"
// Solucion : 
const myArray = [50, 60, 70];
const myData = myArray[0];

// -----------------------------------------------------
// Ejercicio 41 : "Modifica los datos de un arreglo con índices"
// Solucion : 
const myArray = [18, 64, 99];
myArray[0] = 45;

// -----------------------------------------------------
// Ejercicio 42 : "Accede a arreglos multidimensionales con índices"
// Solucion : 
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

// ---------------------------------------------------
// Ejercicio 43 : "Manipula arreglos con push()"
// Solucion : 
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// ---------------------------------------------------
// Ejercicio 44 : "Manipula arreglos con pop()"
// Solucion : 
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// ---------------------------------------------------
// Ejercicio 45 : "Manipula arreglos con shift()"
// Solucion : 
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// ---------------------------------------------------
// Ejercicio 46 : "Manipula arreglos con unshift()"
// Solucion : 
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul" , 35]);

// ---------------------------------------------------
// Ejercicio 47 : "Lista de Compras"
// Solucion : 
const myList = [
    ["Banana", 12], 
    ["Manzana", 15], 
    ["Pera", 7], 
    ["Naranja", 20], 
    ["Durazno", 5]
    ];

// ---------------------------------------------------
// Ejercicio 48 : "Escribe JavaScript reutilizable utilizando funciones"
// Solucion : 
function reusableFunction() {
console.log("Hi World");
}

reusableFunction();

// ---------------------------------------------------
// Ejercicio 49 : "Pasa valores a las funciones utilizando argumentos"
// Solucion : 
function functionWithArgs(num1, num2){
console.log(num1 + num2);
}

functionWithArgs(10, 15)

// ---------------------------------------------------
// Ejercicio 50 : "Devuelve un valor de una función utilizando "Return""
// Solucion : 
function timesFive(num) {
return num * 5;
}
timesFive(5)

