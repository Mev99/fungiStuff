alert('Bienvenido al calculador de precio de hongos!\nEscriba el número del hongo que desee comprar\n1.-Levadura\n2.-Melena de león\n3.-Psilocibine Cubensis (falopa)\n4.-Penicilina')
let fungusSpecies = Number(prompt('Ingrese su hongo'))
let fungusAmmount = Number(prompt('ingrese la cantidad (gramos)'))

while (fungusSpecies == '' || isNaN(fungusSpecies) || (fungusAmmount == '') || isNaN(fungusAmmount) || fungusSpecies > 4) {
    if (fungusSpecies == '' || isNaN(fungusSpecies) || fungusSpecies > 4) {
        alert('Escriba el número del hongo que desee comprar\n1.-Levadura\n2.-Melena de león\n3.-Psilocibine Cubensis\n4.-Penicilina')
        fungusSpecies = Number(prompt('Ingrese su hongo'))
    } else if (fungusAmmount == '' || isNaN(fungusAmmount)) {
        alert('por favor ingrese un número para indicar la cantidad de gramos que desea')
        fungusAmmount = Number(prompt('ingrese la cantidad (gramos)'))
    }
}

alert(fungusAmmount + 'g ' + naming('levadura', 'melena de león', 'psilocibine', 'penicilina') + '?')

function naming(name1, name2, name3, name4) {
    if (fungusSpecies === 1) {
        return name1
    } else if (fungusSpecies === 2) {
        return name2
    } else if (fungusSpecies === 3) {
        return name3
    } else if (fungusSpecies === 4) {
        return name4
    }
}

if (fungusSpecies === 1) {
    let levadura = fungusCost(fungusAmmount, 25)
    alert('El precio sería $' + levadura)
} else if (fungusSpecies === 2) {
    let melenaDeLeon = fungusCost(fungusAmmount, 1383)
    alert('El precio sería $' + melenaDeLeon)
} else if (fungusSpecies === 3) {
    let psilocibine = fungusCost(fungusAmmount, 2750)
    alert('El precio sería $' + psilocibine)
} else if (fungusSpecies === 4) {
    let penicilina = fungusCost(fungusAmmount, 35000)
    alert('El precio sería $' + penicilina)
}

function fungusCost(cantidad, tipo) {
    return cantidad * tipo
}