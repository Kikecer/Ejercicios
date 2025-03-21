let tareahecha = false;

while(!tareahecha) {
    let respuesta = prompt("¿Has hecho la tarea? (si/no)").toLowerCase();
    
    if (respuesta === "si" || respuesta === "si") {
        tareahecha = true;
        console.log("Ok, puedes ir a la fiesta.");
    } else {
        console.log("No puedes ir a la fiesta hasta que termines las tareas.");
    }
} 