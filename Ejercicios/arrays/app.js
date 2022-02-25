/*

let numeros = [1,2,3,4,5,6];



let palabras = ["Hola","JASDFBJDF"]
document.write(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`)
console.log(numeros[3]+numeros[0])
*/
/*
let numeros = [1,2,3,4,5,6];
console.log(numeros.length)


let number  =4;
console.log(Array.isArray(numeros)); */
let numero = prompt ("Decime un numero");
numeroArr = parseInt(numero)
let numeros = [1,2,3,4,5,6];
numeros.push(numeroArr)
console.log(numeros)


document.getElementById('contenido').innerHTML=numeros
document.getElementById('contenido2').innerHTML=("El primer numero eliminado es " + numeros.shift()  +   "<br/>El ultimo numero eliminado es " + numeros.pop()+ "<br/>El numero añadido es " +(numeroArr) )



