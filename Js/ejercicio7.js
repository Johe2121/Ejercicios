// Ejercicio lógico
let day = prompt("Ingrese día");

if (day === null || day === undefined || day === "") {
    alert("Opción invalida");
} else {
    day = day.toLowerCase();
    if (day === "lunes" || 
    	day === "martes" || 
    	day === "miercoles" || 
    	day === "miércoles" || 
    	day === "jueves" || 
    	day === "viernes") {
        alert("Es un día entre semana");
    } else {
        // if ANIDADOS
        if (day === "sabado" || day === "sábado" || day === "domingo") {
            alert("Es fin de semana Wacho vamos con las que cariño");
        } else {
            alert("Por favor no seas tan idiota mono de mierda");
        }
    }
}


/**
 * Diagrama + código
 * 1-
 * Ingresar un departamento (cundinamarca, quindio, antioquia, valle)
 * alert("opción no valida")
 * Dependiendo de que departamento es debe mo
*/


