//while (!isNaN(fungiSpecies)) {
alert('Bienvenido al calculador de precio de hongos!\nEscriba el número del hongo que desee comprar\n1.-Levadura\n2.-Melena de león\n3.-Psilocibine Cubensis (falopa)\n4.-Penicilina')
let fungiSpecies = Number(prompt('Ingrese su hongo'))
let fungiAmmount = Number(prompt('ingrese la cantidad (gramos)'))

while (fungiSpecies == '' || isNaN(fungiSpecies) || (fungiAmmount == '') || isNaN(fungiAmmount) || fungiSpecies > 4) {
    if (fungiSpecies == '' || isNaN(fungiSpecies) || fungiSpecies > 4) {
        alert('Escriba el número del hongo que desee comprar\n1.-Levadura\n2.-Melena de león\n3.-Psilocibine Cubensis\n4.-Penicilina')
        fungiSpecies = Number(prompt('Ingrese su hongo'))
    } else if (fungiAmmount == '' || isNaN(fungiAmmount)) {
        alert('por favor ingrese un número para indicar la cantidad de gramos que desea')
        fungiAmmount = Number(prompt('ingrese la cantidad (gramos)'))
    }
}

alert(fungiAmmount + 'g ' + naming('levadura', 'melena de león', 'psilocibine', 'penicilina') + '?')

function naming(name1, name2, name3, name4) {
    if (fungiSpecies === 1) {
        return name1
    } else if (fungiSpecies === 2) {
        return name2
    } else if (fungiSpecies === 3) {
        return name3
    } else if (fungiSpecies === 4) {
        return name4
    }
}

if (fungiSpecies === 1) {
    let levadura = fungiCost(fungiAmmount, 25)
    alert('El precio sería $' + levadura)
} else if (fungiSpecies === 2) {
    let melenaDeLeon = fungiCost(fungiAmmount, 1383)
    alert('El precio sería $' + melenaDeLeon)
} else if (fungiSpecies === 3) {
    let psilocibine = fungiCost(fungiAmmount, 2750)
    alert('El precio sería $' + psilocibine)
} else if (fungiSpecies === 4) {
    let penicilina = fungiCost(fungiAmmount, 35000)
    alert('El precio sería $' + penicilina)
}

function fungiCost(cantidad, tipo) {
    return cantidad * tipo
}
//}