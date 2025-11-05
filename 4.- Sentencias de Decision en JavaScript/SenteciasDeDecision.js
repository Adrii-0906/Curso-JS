// Sentencias de decision

// Sentencia if
let miNumero = 10;

// Revisar si el numero es positivo
if (miNumero > 0) {
    console.log(`Valor positivo ${miNumero}`);
}

// Sentecia if-else
if (miNumero > 0) {
    console.log(`Valor positivo ${miNumero}`);
} else {
    console.log(`Valor cero o negativo ${miNumero}`);
}

// Sentencia if - if-else - else
if (miNumero > 0) {
    console.log(`Valor positivo ${miNumero}`);
} else if (miNumero === 0) {
    console.log(`Valor igual a ${miNumero}`);
} else {
    console.log(`Valor negativo ${miNumero}`);
}

// Operador ternario
(miNumero > 0) ? console.log(`Positivo`) : console.log(`Negativo`);

// Sentecia Switch

switch (miNumero) {
    case 1:
        if (miNumero === 10) {
            console.log(`${miNumero} es igual a 10`);
        }
        break;
    case 2:
        if (miNumero === 20) {
            console.log(`${miNumero} es igual a 10`);
        }
        break;
    default:
        console.log('Error')
}
