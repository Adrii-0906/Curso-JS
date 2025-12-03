// Declaracion de una matriz
let matriz = [[100, 200, 300],[400, 500, 600]];

// Leemos primero los valores de la matriz, Filas de la matriz
console.log(matriz.length);


// Leemos las columnas de la matriz
console.log(matriz[0].length);
console.log(matriz[1].length);


// Iteracion de la matriz
// Primero las filas
for (let i = 0; i < matriz.length; i++) {
    // Ahora dentro del ciclo leemos las columnas
    for (let j = 0; j < matriz[i].length; j++) {
        console.log('Elemento[' + i + '][' + j + '] = ' + matriz[i][j]);
    }
}