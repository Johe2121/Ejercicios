/**
 * 2 -
 * Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * Ingresar objetivo de visita (turismo, comidas, museos)
 * Dependiendo de la opcion elegida
 * ejemplo1 (antioquia y comidas)
 * mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
 * ejemplo 2: se ingreso cundinamarca y turismo
 * mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
 * alert("opcion no valida") en caso que no se ingrese alguna de las opciones
 *
 */
let dpmnt = prompt("Ingrese el departamento");
let accion = prompt("Qué desea saber");
if (dpmnt === null || dpmnt === undefined || dpmnt === "") {
    alert("Opcion invalida");
} else {
    dpmnt = dpmnt.toLowerCase();
    if (dpmnt === "cundinamarca") {
        accion = accion.toLowerCase();
        switch (accion) {
            case "turismo":
                alert("");
                break;
            case "comida":
                alert("Ajiaco Bogotano \n Roscón resobado");
                break;
            case "museos":
                alert("Museo de historia nacional de la Sabana \n Casa museo Tequendama");
                break;
            default:
                alert("elol")
                break;
        }
    } else {
        if (dpmnt === "quindio" || dpmnt === "quindío") {
            accion = accion.toLowerCase();
            switch (accion) {
                case "turismo":
                    alert("Parque del café \n Jardín botánico de Quindío");
                    break;
                case "comida":
                    alert("Trucha \n Bandeja Paisa");
                    break;
                case "museos":
                    alert("Museo del oro Quimbaya \n Museo de arte del Quindío MAQUI");
                    break;
                default:
                    alert("elol")
                    break;
            }
        } else {
            if (dpmnt === "antioquia") {
                accion = accion.toLowerCase();
                switch (accion) {
                    case "turismo":
                        alert("Miradores de Guatapé \n Piedras del Peñol");
                        break;
                    case "comida":
                        alert("Sancocho Atioqueño \n Arepa (esa es venezolana)");
                        break;
                    case "museos":
                        alert("Museo el castillo \n Museo de Antioquia");
                        break;
                    default:
                        alert("elol")
                        break;
                }
            } else {
                if (dpmnt === "valle" || dpmnt === "valle del cauca") {
                    accion = accion.toLowerCase();
                    switch (accion) {
                        case "turismo":
                            alert("Embalse del Caliama \n Monumento al cristo rey");
                            break;
                        case "comida":
                            alert("Mango biche \n Chontaduro");
                            break;
                        case "museos":
                            alert("Museo de la caña \n Museo Caliwood");
                            break;
                        default:
                            alert("elol")
                            break;
                    }
                } else {
                    alert("Opcion no Valida")
                }
            }
        }
    }
}