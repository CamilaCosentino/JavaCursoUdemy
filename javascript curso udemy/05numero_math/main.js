const num1 = 49;
const num2 = 7
var suma, resta,multi, divi, mod, obj_pi ,obj_round , obj_pow, obj_cuadr,obj_abs,obj, obj_cell,  obj_floor, 
obj_min, obj_max, obj_random_1, obj_random_5
//Suma
suma = num1 + num2
//Resta
resta = num1 - num2
//Multiplicación
multi = num1 * num2
//División
divi = num1 / num2
//Modulos
mod = num1 % num2
//Math Object

obj_pi = Math.PI //Devuelve el valor de PI (3.14)
obj_round = Math.round(9.8) //Devuelve 10 por que el .round rendondea para el entero mas aproximado
obj_pow = Math.pow(5,3) //Devuelve 125 por que el .pow (dependiendo si el segundo numero eleva al cuadrado o al cubo el primer numero)
obj_cuadr= Math.sqrt(81) //Devuelve 9 por que el .sqrt saca la raiz cuadrada del numero dentro de los parentesis
obj_abs= Math.abs(-8) //Devuelve 8 por que el .abs cambia de un numero negativo a un posivo, no  viceversa
obj_cell= Math.ceil(4.1) //Devuelve 5 por que el .ceil rendodea para arriba sin importar el decimal
obj_floor = Math.floor(8.9) //Devuelve 8 por que el .floor rendodea para abajo sin importar el decimal
obj_min = Math.min(3,5) //Devuelve 3 por que el .min devuelve el numero mas bajo entre los que estan dentro de los parentesis
obj_max = Math.max(3,10,5) //Devuelve 8 por que el .min devuelve el numero mas alto entre los que estan dentro de los parentesis
obj_random_1 = Math.random() //Devuelve un numero al azar entre 0 y 1 contando decimeles
obj_random_5 = Math.random()*5 //Devuelve un numero al azar entre 0 y 5 contando decimeles


console.log("SUMA")
console.log(suma)
console.log("Resta")
console.log(resta)
console.log("Multiplicación")

console.log(multi)
console.log("División")

console.log(divi)
console.log("Modulo")
console.log(mod)
console.log("Math Object")
console.log(obj_pi)
console.log(obj_round)
console.log(obj_pow)
console.log(obj_cuadr)
console.log(obj_abs)
console.log(obj_cell)
console.log(obj_floor)
console.log(obj_min)
console.log(obj_max)
console.log(obj_random_1)
console.log(obj_random_5)

