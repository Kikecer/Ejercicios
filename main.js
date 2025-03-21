function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
        }
    } while (isNaN(numero));
    return numero;
}

let num1 = solicitarNumero("Ingresa el primer número:");
let num2;

do {
    num2 = solicitarNumero("Ingresa el segundo número (no puede ser 0):");
    if (num2 === 0) {
        alert("No se puede dividir entre 0. Ingresa otro número.");
    }
} while (num2 === 0);

let resultado = num1 / num2;
alert(`El resultado de la división es: ${resultado}`);
