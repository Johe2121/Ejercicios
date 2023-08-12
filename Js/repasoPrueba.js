let dpmnt = prompt("Ingrese su Departamento");

if (dpmnt === null || dpmnt === undefined || dpmnt === "") {
    alert("Eres de verdad?");
} else {
    dpmnt = dpmnt.toLowerCase();
    if (dpmnt === "cundinamarca") {
        alert("Bogotá");
    } else {
        if (dpmnt === "quindio") {
            alert("Armenia");
        } else {
            if (dpmnt === "valle" || dpmnt === "valle del cauca") {
                alert("Santiago de Cali");
            } else {
                if (dpmnt === "antioquia") {
                    alert("Medellín");
                } else {
                    alert("Opción Invalida");
                }
            }
        }
    }
}