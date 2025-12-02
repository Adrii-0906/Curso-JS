// Arrays en JS
let numerosArray = [];

// Modificar los valores del Array
numerosArray[0] = 13;
numerosArray[1] = 21;
numerosArray[4] = 'hola';

// Leer los valores del Array
console.log('Elemento 1 - [0] ' + numerosArray[0]);
console.log('Elemento 3 - [2] ' + numerosArray[2]);

// Declaracion de Arrays con sintaxis simplificada
let numerosArray2 = [13, 21, 0, 0, 62];

console.log('Elemento 1 - [0] ' + numerosArray2[0]);
console.log('Elemento 3 - [2] ' + numerosArray2[2]);
console.log('Elemento 5 - [4] ' + numerosArray2[4]);

console.log('');

// Leer valores con un bucle
for (let i = 0; i < numerosArray2.length; i++) {
    console.log(`Arreglos [${i}] = ${numerosArray2[i]}`);
}