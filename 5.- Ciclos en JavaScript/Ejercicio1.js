// Imprimir los primeros 10 numero de 3 en 3
// 1 - 4 - 7 - 10
// 1 -2 -5 -8

// Imprimir los 10 primero numeros de 3 en 3
console.log('Imprimir los 10 primeros numeros de 3 en 3 (Positivos)');

let numeroMaxPos = 11;

for (let i = 1; i < numeroMaxPos; i += 3) {
    console.log(i)

    // Salida 1 4 7 10
}

console.log();
console.log('Imprimir los 10 primero numeros de 3 en 3 (Negativos)')

let numeroMaxNeg = -10;
for (let i = 1; i >= numeroMaxNeg; i -= 3) {
    console.log(i)

    // Salida 1  -2  -5  -8
}