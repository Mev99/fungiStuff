// alert('Bienvenido al calculador de precio de hongos!\nEscriba el número del hongo que desee comprar\n1.-Levadura\n2.-Melena de león\n3.-Psilocibine Cubensis (falopa)\n4.-Penicilina')
// let fungusSpecies = Number(prompt('Ingrese su hongo'))
// let fungusAmmount = Number(prompt('ingrese la cantidad (gramos)'))

// while (fungusSpecies == '' || isNaN(fungusSpecies) || (fungusAmmount == '') || isNaN(fungusAmmount) || fungusSpecies > 5) {
//     if (fungusSpecies == '' || isNaN(fungusSpecies) || fungusSpecies > 4) {
//         alert('Escriba el número del hongo que desee comprar\n1.-Levadura\n2.-Melena de león\n3.-Psilocibine Cubensis\n4.-Penicilina')
//         fungusSpecies = Number(prompt('Ingrese su hongo'))
//     } else if (fungusSpecies === 5) {
//         break
//     } else if (fungusAmmount == '' || isNaN(fungusAmmount)) {
//         alert('por favor ingrese un número para indicar la cantidad de gramos que desea')
//         fungusAmmount = Number(prompt('ingrese la cantidad (gramos)'))
//     }
// }

// alert(fungusAmmount + 'g ' + naming('levadura', 'melena de león', 'psilocibine', 'penicilina') + '?')

// function naming(name1, name2, name3, name4) {
//     if (fungusSpecies === 1) {
//         return name1
//     } else if (fungusSpecies === 2) {
//         return name2
//     } else if (fungusSpecies === 3) {
//         return name3
//     } else if (fungusSpecies === 4) {
//         return name4
//     }
// }

// if (fungusSpecies === 1) {
//     let levadura = fungusCost(fungusAmmount, 25)
//     alert('El precio sería $' + levadura)
// } else if (fungusSpecies === 2) {
//     let melenaDeLeon = fungusCost(fungusAmmount, 1383)
//     alert('El precio sería $' + melenaDeLeon)
// } else if (fungusSpecies === 3) {
//     let psilocibine = fungusCost(fungusAmmount, 2750)
//     alert('El precio sería $' + psilocibine)
// } else if (fungusSpecies === 4) {
//     let penicilina = fungusCost(fungusAmmount, 35000)
//     alert('El precio sería $' + penicilina)
// }

// function fungusCost(cantidad, tipo) {
//     return cantidad * tipo
// }


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
    // averiguarPrecio() {
    //     if (this.letal) {
    //         return this.nombre + ' ' + this.precioXGramo + 'WARNING es letal! consulte la dosificacion'
    //     } else {
    //         return this.nombre + ' ' + this.precioXGramo
    //     }
    // }
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
        alert('Usted entrara en la seccion de compras')
    }
}

do {
    preguntaInicio()
} while (pregunta1 === 1)


const mapeoPrecios = fungi.map(Element => {
    return Element.id + '.- ' + Element.nombre + ' $' + Element.precioXGramo
} ).join('\n')

// let pregunta3 = 0
// let pregunta4 = 0
let pregunta2 = 1

const carrito = {
    item:[],
    total: 0.00
}

function funcionCarrito() {
    pregunta2 = Number(prompt('ingrese el numero del hongo que desea agregar al carrito (el precio es por gramo)\n' + mapeoPrecios + '\nIngrese una letra cuando desee dejar de agregar articulos al carrito'))
    const busquedaDelHongo = fungi.find(Element => Element.id == pregunta2)
    console.log(busquedaDelHongo)
    if (pregunta2 <= 5 && pregunta2 >= 1) {
        carrito.item.push(busquedaDelHongo)
    } else if(pregunta2 <= 5 || pregunta2 >= 1) {
        alert('ingrese un numero correspondiente a un hongo por favor!')
    }
}

function funcionPrecio() {
    const preguntaCantidad = Number(prompt('Cuanto quiere (en gramos) de' + carrito.item))
    }

do {
    funcionCarrito()
    funcionPrecio()
} while (pregunta2 < 6 || pregunta2 > 0)

console.log(carrito.item)   
console.log(carrito.total)
