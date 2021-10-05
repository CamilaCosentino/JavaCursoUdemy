//Primitive

//undefined
let item;
//String
item = "Hola"
//Numero 
item = 3
//booleano
item= false
//Null
item = null
//Simbolo
item = Symbol()

//Reference 

//Array
item = [2,4,6,10,45,1] 
//Objeto
item = {
    nombre: "Camila",
    edad : 21
}  
//Date
item = new Date()
console.log("tipo" + " " + typeof item)

//DIFERENCIAS
let x = 20
let y = x
console.log(x,y)
x = 30
console.log(x,y)
//cuando se trata de variables numerica, si uno se modifica el otro no pero cuando se trata de objetos si uno cambia el otro también
let a = {valor:40 }
let b = a
console.log(a,b)
a.valor = 30
console.log(a,b)

let nombre = "Camila"
function mensaje(nombre) {
    nombre = "Alexis"
    console.log("El nombre dentro de la funcion es: ", nombre) //esto devuelve el valor Alexis  más todo el string
//creamos una funcion llamada mensaje y dentro le cambiamos el valor a la variable.
//dentro de la misma generamos un console.log para que devuelva el nombre modificado dentro de la funcion

}
//aca llamamos a la funcion y a la varible nombre de la misma

mensaje(nombre)
//creamos un consola para ver el verdadero valor de la variable nombre que es Camila
console.log(nombre)
