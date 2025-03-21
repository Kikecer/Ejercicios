function solicitarNumero(mensaje) {
    let numero;
    do {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingresa un número válido y positivo.");
        }
    } while (isNaN(numero) || numero < 0);
    return numero;
}

let meta = solicitarNumero("¿Cuánto deseas ahorrar en total?");
let ahorroActual = 0;

while (ahorroActual < meta) {
    let ahorroHoy = solicitarNumero("¿Cuánto deseas ahorrar hoy?");
    ahorroActual += ahorroHoy;
    
    if (ahorroActual < meta) {
        alert(`Has ahorrado ${ahorroActual}. Te faltan ${meta - ahorroActual} para alcanzar tu meta.`);
    }
}

alert(`¡Felicidades! Has alcanzado tu meta de ahorro de ${meta}.`);
