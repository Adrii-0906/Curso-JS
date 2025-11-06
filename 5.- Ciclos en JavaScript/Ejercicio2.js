// Ejercico de suma acumulativa

// Solucion usando for

console.log('Suma acumulativa usando for: ')
let sumaFor = 0;
let maximoFor = 5;

for (let i = 1; i <= maximoFor;i++) {
    sumaFor += i;
}
console.log(sumaFor)

console.log();

// Suma acumulativa usando do while

console.log('Suma acumulativa usando do while')

let numero = 1;
let sumaWhile = 0;
let maximowhile = 5;

do {
    sumaWhile += numero;
    numero++;
} while(numero <= maximowhile);
console.log(sumaWhile)