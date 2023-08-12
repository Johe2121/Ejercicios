// Condicionales
/**
 * Operator
 * con == comparamos valores sin importar el tipo de dato
 * === comparamos valores respetando el tipo de dato
 * > mayor que
 * < menor que
 * >= mayor/igual que
 * != distinto a. No respeta tipo de dato
 * !== diferenre a. Respeta tipo de dato
 * 
 * Operadores Lógicos
 * || = O
 * ! = NO
 * && = Y
 */

const age = prompt("ingresa tu edad");
const country = prompt("Ingresa tu pais").toLowerCase();

//Condicional if-else
if (age >= 16 && country != "alemania") {
	console.log("Preparate Veras obras 100/10 y God");
	alert("Se habilito el catalogo de peliculas violentas");
} else {
	console.log("Así lo quiso el código mijo, No esté chingando");
	alert("No mijo vallase no quiero fusilarlo hoy");
}

//NOTA: Mayusculas (V)(toLowerCase)
//NOTa: Tildes ()()
// Vacios:
//Nulos
//convertir tipos de dato
