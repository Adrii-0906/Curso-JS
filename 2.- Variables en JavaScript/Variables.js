// Reglas de nombres de variables

// letras, $, _, posteriormente se pueden usar numeros

let $miNumero1 = 10;

console.log($miNumero1);

let _miNumero2 = 20;
console.log(_miNumero2);

let miNumero3 = 30;
console.log(miNumero3);


// Tipo de datos en JS

let miEntero = 10;
console.log(miEntero);

let miFlotante = 7.9;
console.log(miFlotante);

let miCadena = "Hola";
console.log(miCadena);

let miBoolean = true;
console.log(miBoolean);

let miNull = null;
console.log(miNull);

let miUndefined = undefined;
console.log(miUndefined);

// Hoisting
var x; // Declaramos la variable
x = 10; // Inicializamos la variable

console.log(x);

// Constantes
const MI_CONSTANTE = 10; // Se declara siempre con mayusculas y no se puede volver a cambiar su valor
console.log(MI_CONSTANTE);