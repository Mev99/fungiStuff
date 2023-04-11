// NOTA: 'fungi' es el plural de 'fungus'.
// DECLARACION DEL ARRAY Y CLASE.
const fungi = []
class Fungus {
    constructor(id, nombre, clasificacion, precioXGramo, unicelular, letal, stock) {
        this.id = id
        this.nombre = nombre
        this.clasificacion = clasificacion
        this.precioXGramo = precioXGramo
        this.unicelular = unicelular
        this.letal = letal
        this.stock = stock
    }
}
function newFungus(id, nombre, clasificacion, precioXGramo, unicelular, letal, stock) {
    let fungus1 = new Fungus(id, nombre, clasificacion, precioXGramo, unicelular, letal, stock)
    fungi.push(fungus1)
}
newFungus(1, 'Levadura', 'Levaduras', 25, true, false, 500)
newFungus(2, 'Psilocibina', 'Basidiomycota', 3500, false, false, 500)
newFungus(3, 'Melena de león', 'Basidiomycota', 1383, false, false, 500)
newFungus(4, 'penicilina', 'deuteromycetes', 35000, true, false, 500)
newFungus(5, 'Amanita Muscaria', 'Basidiomycota', 5500, false, true, 500)

// COMIENZA LA "INTERACCION" DEL USUARIO CON EL PROGRAMA
alert('Bienvenido a la pagina de fungi, estamos en la etapa Alpha!')
let pregunta1 = 1

let showFungus = fungi.map(Element => {
    return Element.id + '.- ' + Element.nombre + ', ' + Element.clasificacion + ' $' + Element.precioXGramo + ' x g \n'
} ).join('')

function preguntaInicio() {
    do {
        pregunta1 = Number(prompt('Si desea ver nuestros hongos en stock y su informacion, escriba "1"\nDe lo contrario, si desea directamente comprar, escriba "2"'))
    } while (isNaN(pregunta1) || pregunta1 < 1 || pregunta1 > 2)
    if (pregunta1 === 1) {
            alert(showFungus)
    }else if (pregunta1 === 2){
        alert(`Usted entrara en la seccion de compras`)
    }
}

do {
    preguntaInicio()
} while (pregunta1 === 1)


const mapeoPrecios = fungi.map(Element => {
    return `${Element.id} .- ${Element.nombre} $${Element.precioXGramo}`
} ).join('\n')

let pregunta2 = 1

const carrito = {
    item:[],
    total: 0.00
}

function funcionCarrito() {
    pregunta2 = Number(prompt(`ingrese el numero del hongo que desea agregar al carrito (el precio es por gramo)\n${mapeoPrecios}\nIngrese una letra cuando desee dejar de agregar articulos al carrito`))

    const busquedaDelHongo = fungi.find(Element => Element.id == pregunta2)
    console.log(busquedaDelHongo)
    if (pregunta2 <= 5 && pregunta2 >= 1) {
        carrito.item.push(busquedaDelHongo)
    } else if(pregunta2 <= 5 || pregunta2 >= 1) {
        alert(`ingrese un numero correspondiente a un hongo por favor!`)
    }
}

function funcionPrecio() {
    const preguntaCantidad = Number(prompt(`Cuántos gramos quiere de ${carrito.item[carrito.item.length - 1].nombre}?`))
    const precioPorGramo = carrito.item[carrito.item.length - 1].precioXGramo
    const precioTotal = preguntaCantidad * precioPorGramo
    carrito.total += precioTotal
    alert(`Se agregaron ${preguntaCantidad} gramos de ${carrito.item[carrito.item.length - 1].nombre} al carrito. Precio: $${precioTotal.toFixed(2)}\n Total en el carrito: $${carrito.total.toFixed(2)}`)
  }
  
do {
    funcionCarrito()
    funcionPrecio()
} while (pregunta2 < 6 || pregunta2 > 0)

console.log(carrito.item)   
console.log(carrito.total)


// function prueba() {
//     const
// }
prueba()
console.log(prueba)