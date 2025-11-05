// Operaciones en JS

let comprador1 = 10
let comprador2 = 10

// Suma de dos numeros
let num1 = 20;
let num2 = 30;
let suma = num1 + num2;

console.log(suma);

// Resta de nos numeros

let num4 = 43;
let num5 = 25;
let resta = num4 - num5;

console.log(resta);

// Multiplicacion de numeros

let num6 = 3;
let num7 = 6;
let multiplicacion = num6 * num7;

console.log(multiplicacion);

// Division de dos numeros
let division = num2 / num6;
console.log(division);

// Comprador de igualdad ==

console.log(comprador1 == comprador2);

// Comparador de igualdad estricto, se compara el valor y el tipo de dato ===
console.log(comprador1 === comprador2);

// Operadores distintos !=
console.log(`${num1} != ${num2} -> ${num1 !== num2}`);

// Operador menor que <
console.log(`${num6} < ${num5} -> ${num6 < num5}`);

// Operador menor o igual <=
console.log(`${num6} <= ${num5} -> ${num6 <= num5}`);


// Operador mayor que >
console.log(`${num6} > ${num5} -> ${num6 > num5}`);

// Operador mayor o igual
console.log(`${num6} <= ${num5} -> ${num6 <= num5}`);

// Operadores logicos
let a = true;
let b = false;

// Operador logico && (and)
console.log(`${a} && ${b} -> ${a && b}`);

// Operador logico || (or)
console.log(`${a} || ${b} -> ${a || b}`);

// Operador ! (not o NO)
console.log(`${a} -> ${!a}`);
console.log();

// Ejercicio: Ejemplo valor dentro de rango
console.log('Ejercicio de Operadores');

// Valores maximos y minimos del rango
let minimo = 0;
let maximo = 5;

// Valor para saber si esta dentro del rango
let dato = 3;

// Revision si el dato esta dentro del rango

let dentroRango = dato >= minimo  && dato <= maximo;
console.log('Valor dentro rango: ' + dentroRango);

// Precedendia de Operadores

// Ejercicio: Revisar expresion de izq a drch

let operacion = 12 / 3 + 2 * 3 - 1;
console.log(operacion);

// Vamos a verlo paso a paso
// Paso 1. Division 12 / 3 = 4
// Paso 2. Multiplicacion 2 * 3 = 6
// Paso 3. Suma 4 + 6 = 10
// Paso 4. Resta 10 - 1 = 9

