let departamento = prompt("Ingresa un departamento: ");

if (departamento !== null) {
    
    departamento = departamento.toLowerCase();
    
    switch (departamento) {
        case "cundinamarca":
            alert("La capital de Cundinamarca es Bogotá");
            break;
        case "quindio":
            alert("La capital de Quindío es Armenia");
            break;
        case "antioquia":
            alert("La capital de Antioquia es Medellín");
            break;
        case "valle", "valle del cauca":
            alert("La capital de Valle del Cauca es Cali");
            break;
        default:
            alert("Opción no válida");
            break;
    }
} else {
    alert("Opción no válida");
}