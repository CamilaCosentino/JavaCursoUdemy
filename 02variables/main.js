//Creando una variable con VAR
var nombre = "Camila Cosentino"
console.log(nombre);
nombre = "Alexis Gomez"
console.log(nombre)
var mensaje;
console.log(mensaje)
mensaje = "Nuevo mensaje"
console.log(mensaje)
//Las variables puede ser letras, numeros  y usar $
//pero nunca puede empezar con un numero porq salta error pero si con un $
// se puede utilizar mayusculas o en forms de camello.
var nombre;
var apellido;
var nombreCompleto // a esto me referia con forma de camello

//Creando a una variable con LET y CONST
let edad 
edad = 20;
console.log(edad)
edad = 21 
console.log(edad)
/*
const name = "Camila Lovera"
name = "Camila Cosentino"
*/
//esto salta error porque la variable creada con CONST no es cambiante sino constante
const usuario = {
    name:"Camila",
   
    rol: "admin"
}
console.log(usuario)
// cuando usas const en un objeto si puede cambiar el valor.

usuario.name = "Alexis"
console.log(usuario)
//también se usa el CONST para Arrays como puede ser la siguiente
const array = []
console.log(array)
array.push(3,4,6,7)
console.log(array);