// // CLASE 4 FUNCIONES
// // .-EJ 1
// preguntaNombre = prompt('tu nombre?')
// function saludo(nombre){
//     alert('Hola ' + nombre)
// }
// saludo(preguntaNombre)

// // .-EJ 2
// function nombrePregunta (nombrecito) {
//     nombrecito = nombrecito
//     alert(nombrecito)
// }
// nombrePregunta('Juan')
// nombrePregunta('Mati')

// // .-EJ 3
// const preguntaNumero = Number(prompt('de que numero desea sacar el factorial?'))

// function factorial(entero, entero2) {
//     while (entero2 != 1) {
//         return (entero * (entero2--))
//     }
// }

// factorial(preguntaNumero, preguntaNumero)

// // .-EJ 4
// let ingresoFactura = Number(prompt('precio de la factura?'))
// let ingresoIva = Number(prompt('Cual es el % del IVA a calcular?'))

// function calcularIva(factura, iva) {
//     if (!isNaN(factura) && !isNaN(iva) && factura != '' && iva != ''  ) {
//         const facturaEIva = (iva * factura) / 100
//         const calculo = factura + facturaEIva
//         console.log(calculo)
//     } else if (factura != '' && !isNaN(factura) && iva == '') {
//         const facturaVeintiuno = (21 * factura) / 100
//         const calculo = factura + facturaVeintiuno
//         console.log(calculo)
//     }else {
//         console.log('mal')

//     }
// }
// calcularIva(ingresoFactura, ingresoIva)

// // .- EJ 5
// const preguntaRadio = Number(prompt('Cuanto mide el radio?'))

// function area(radio, pi){
//     let calculo = (radio * radio) * pi
//     return(calculo)
// }
// // area(preguntaRadio, 3.14)

// const pregunta = Number(prompt('cuanto mide el lado?'))

// function volumen(lado) {
//     let calculoVolumen = area(preguntaRadio, 3.14) * lado
//     console.log(calculoVolumen)
// }
// volumen(pregunta)

// // .-EJ 6 Escribir una función que reciba una muestra de números en una lista y devuelva su media.
// do {
//     let preguntaNumero = Number(prompt('ingrese una lista de numeros/nIngrese 0 si desea salir'))
//     console.log(preguntaNumero)
// } while (preguntaNumero != 0)   

// // .- EJ 5 PDF ej complemetarios
// function validacion(cadena) {
//     do {
//         let algo = prompt('escribi')
//     } while (algo != 'ESC'); 
// }
// validacion()



//ClASE 5 OBJETOS
// // FOR IN podes pedir los datos de un objecto "propiedad: valor"
// const hombre = {nombre: 'Pichulo', edad: 40, origen: 'Somalia'}
// for (const valor in hombre) {
//     console.log(hombre[valor])
// }



// // .- ARRAYs PDF 
// // SACAR UN PROMEDIO
// const edades = [25, 36, 47, 23]
// let total = 0 
// for (let i = 0; i < edades.length; i++) {
//     total += edades[i]
// }
// console.log(total / edades.length)
// // Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por pantalla.
// const materias = []
// for (let i = 0; i < 3; i++) {
//     let preguntaMateria = prompt('que materia es mostro')
//     materias.push(preguntaMateria)
// }
// console.log(materias[2])

// // Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array y la muestre por pantalla el mensaje Yo estudio <asignatura>, donde <asignatura> es cada una de las asignaturas del array.
// // Manera 1 de hacerlo
// const materias = []
// for (let i = 0; i < 3; i++) {
//     let preguntaMateria = prompt('decime la materia mostro')
//     materias.push(preguntaMateria)
//     alert('Yo estudio ' + materias[i])
// }
// console.log(materias)
// //manera 2
// const materias = []
// for (let i = 0; i < 3; i++) {
//     let preguntaMateria = prompt('decime la materia mostro')
 //    materias.push(preguntaMateria)
// }
// alert('Yo estudio ' + materias.join(', '))
// console.log(materias)
    
// // Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario la nota que ha sacado en cada asignatura, y después las muestre por pantalla con el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una des las asignaturas del array y <nota> cada una de las correspondientes notas introducidas por el usuario.
// const materias = []
// const notas = []
// for (let i = 0; i < 3; i++) {
//     let preguntaMateria = prompt('decime la materia mostro')
//     materias.push(preguntaMateria)
//     let preguntaNota = prompt('que nota fiera')
//     notas.push(preguntaNota)
// }

// for (let i = 0; i < notas.length; i++) {
//     alert(materias[i] + ' ' + notas[i])
// }
// console.log(materias)
// console.log(notas)

// //Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario la nota que ha sacado en cada asignatura y elimine del array las asignaturas aprobadas. Al final el programa debe mostrar por pantalla las asignaturas que el usuario tiene que repetir.
// const materias = []
// const notas = []
// for (let i = 0; i < 3; i++) {
//     let preguntaMateria = prompt('decime la materia mostro')
//     materias.push(preguntaMateria)
//     let preguntaNota = Number(prompt('que nota fiera'))
//     if (preguntaNota >= 4) {
//      materias.splice([i], 1)   
//     } else
//     notas.push(preguntaNota)
// }
// alert('deberas reperir ' + materias.join(', '))

//7. Escribir un programa que almacene el abecedario en un array, elimine las letras que ocupen posiciones múltiplos de 3, y muestre por pantalla la lista resultante.

//8. Escribir un programa que pida al usuario una lista de letras y muestre por pantalla el número de veces que ingresó cada vocal.

//9. Escribir un programa que almacene en un array los siguientes precios, 50, 75, 46, 22, 80, 65, 8, y muestre por pantalla el menor y el mayor de los precios.

