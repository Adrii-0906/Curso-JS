// Ejercicio Mayor de edad

console.log('Ejercicio para saber si la persona es mayor de edad.');

// Intanciamos las variables
const edad_adulto = 18;

let edadPersona = 20;

// Hacemos la sentencia if-else para saber si la persona es mayor de edad
if (edadPersona >= edad_adulto) {
    console.log(`La persona con edad ${edadPersona} es adulto`);
} else {
    console.log(`La persona con edad ${edadPersona} es menor de edad`);
}


// Ejercicio para saber el dia de la semana
console.log();
console.log('Ejercicio para saber el dia de la semana con if-else');

// Instanciamos las variables

let diaSemana = 4;

// Hacemos la condicion para saber que dia de la semana es
if (diaSemana == 1) {
    console.log('Lunes')
} else if (diaSemana == 2) {
    console.log('Martes')
} else if (diaSemana == 3) {
    console.log('Miercoles')
} else if (diaSemana == 4) {
    console.log('Jueves')
} else if (diaSemana == 5) {
    console.log('Viernes')
} else if (diaSemana == 6) {
    console.log('Sabado')
} else if (diaSemana == 7) {
    console.log('Domingo')
} else {
    console.log(`Dia de la semana erroneo ${diaSemana}`)
}

// Ejercicio para saber el dia de la semana con la sentencia switch

console.log();
console.log('Comprobar el dia de la semana con switch');

switch (diaSemana) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log(`Dia de la semana erroneo ${diaSemana}`);
}
