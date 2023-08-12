//funciones 2 literal
// Y... Logica... con Algoritmos...
//WAOS
//dirección, estado civil. cedula, tlf, correo, salario
let userName
let age
let direction
let civilStatus
let id
let cellPhone
let email

function registerData() {
    userName = prompt("Ingrese su nombre")
    age = prompt("Ingrese su edad")
    direction = prompt("Ingrese su dirección")
    civilStatus = prompt("Ingrese su estado civil")
    id = prompt("Ingrese su identificación")
    cellPhone = prompt("Ingrese su número telefónico")
    email = prompt("Ingrese su correo")
}

function showData() {
    alert("Tu nombre es: " + userName + "\nTu edad es: " + age + "\nTu dirección es: " + direction + "\nTu estado civil es: " + civilStatus + "\nTu identificación es: " + id + "\nTu celular es: " + cellPhone + "\nTu correo es: " + email)
}