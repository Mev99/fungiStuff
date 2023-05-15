//FETCH
const url = "../data.json"
fetch(url)
    .then(res => res.json())
    .then(fungi => renderCard(fungi))
    .catch(error => console.log("ERROR AL HACER FETCH O EN LA RESOLUCION DE LAS PROMESAS"))

//RENDER DE CARDS Y CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// RENDER CARDS
let capturarDiv = document.getElementById("card__div")

function renderCard(arrayDeFungus) {
    capturarDiv.innerHTML = ""
    crearCards = arrayDeFungus.forEach(fungus => {
        let crearDiv = document.createElement("div")
        crearDiv.className = "card__fungus"
        crearDiv.innerHTML = `
	<div class="row">
    <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card">
    <div class="cover ${fungus.img}">
    <h1>${fungus.nombre}</h1>
    <span class="price">$${fungus.precio}/kg</span>
    <div class="card-back">
    <a href="#" id="${fungus.id}" class="anadir__carrito">Añadir al carrito</a>
    <a href="#" id="" class="detalles">Detalles</a>
    </div>
    </div>
    </div>
    </div>`
        capturarDiv.append(crearDiv)
    })

    let carritoBoton = document.querySelectorAll(".anadir__carrito")
    carritoBoton.forEach(Element => {
        Element.addEventListener("click", (e)=> aniadirAlCarrito(e, arrayDeFungus))
    })

}       

//BUSCAR ARTICULOS (render con filter)
let searchInput = document.getElementById("search__input")
let searchBtn = document.getElementById("search__btn")
let searchForm = document.getElementById("search__form")
searchBtn.onclick = filtrarCard
         
const accentMap = {
  'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u'
}
    function accent_fold(s) {
        if (!s) { return '' }
        let ret = ''
        for (let i = 0; i < s.length; i++) {
            ret += accentMap[s.charAt(i)] || s.charAt(i);
    }
    return ret
}
//UNDER DEVELOPMENT
function filtrarCard(e) {
        e.preventDefault()
        let filtroAcento = accent_fold(searchInput.value.toLowerCase())
        let filtrar = fungi.filter(Element => Element.nombreBusqueda.toLowerCase().includes(filtroAcento))
        renderCard(filtrar, capturarDiv)
}

//ADD TO CART N MORE
function aniadirAlCarrito(e, array) {
    e.preventDefault()
    let localizarFungus = array.find(Element => Element.id == e.target.id)
    if (carrito.some(Element => Element.id == localizarFungus.id)) {
        let repetido = carrito.findIndex(Element => Element.id == localizarFungus.id)
        carrito[repetido].kg++
        carrito[repetido].subtotal = carrito[repetido].precio * carrito[repetido].kg
    } else {
        carrito.push({
            id: localizarFungus.id,
            nombre: localizarFungus.nombre,
            precio: localizarFungus.precio,
            kg: 1,
            subtotal: localizarFungus.precio,
            imgSrc: localizarFungus.imgSrc
        })

    }
    console.log(carrito)
    actualizarCarrito()
}

// TOASTIFY CARRITO
function toast() {
    Toastify({
        text: "Se actualizo el carrito",
        duration: 3000,
        gravity: "bottom", // `top` or `bottom`
        position: "right",
        style: {
            background: "linear-gradient(to right, #002400, #58641D)",
          }
        }).showToast();
}

//RENDER CARRITO Y PRECIO
let tbody = document.getElementById("tbody")

function actualizarCarrito() {
    toast()
    renderCarrito(carrito)
    renderSubtotal(carrito)

    //GUARDAR EN LOCAL STORAGE
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function renderCarrito(array) {
    tbody.innerHTML = ""
    array.forEach(Element => {
        tbody.innerHTML += `<tr>
    <td><img src="${Element.imgSrc}" class="img-cart"></td>
    <td><strong>${Element.nombre}</strong></td>
    <td>
    <form class="form-inline">
        <input class="form-control" type="text" value="${Element.kg}kg">
        <button rel="tooltip" class="btn btn-default"><i class="fa fa-pencil"></i></button>
        <a href="#" class="btn btn-primary"><i class="fa fa-trash-o"></i></a>
    </form>
    </td>
    <td>${Element.precio}</td>
    <td>${Element.subtotal}</td>
    </tr>`
})
}

// RENDER PRECIO
let precioTotal = document.getElementById("total__price")
function renderSubtotal(array) {
    precioTotal.innerHTML = ""
    let plataAPagar = 0
array.forEach(Element => {
    plataAPagar += Element.kg * Element.precio
})
precioTotal.innerHTML = `$${plataAPagar}`
}
actualizarCarrito()

// BOTON "PAGAR"
let pagar = document.getElementById("boton__pagar")
pagar.onclick = pago

function pago() {
    if (carrito.length) {
        carrito = []
        actualizarCarrito()
        localStorage.clear()
        tirarAlerta("Gracias por su compra. Macanudo,", "#716add", "#F1E9DA", "../img/giphy.gif")
    } else
    tirarAlerta("Usted no tiene ningún artículo en el carrito. Comprame algo loco por favor te lo pido, mirame, estoy de rodillas", "#F1E9DA", "#570000")
}

//funcion SWEET ALERT
function tirarAlerta(msj, color, background, backdrop) {
    Swal.fire({
        title: `${msj}`,
        width: 600,
        padding: `3em`,
        color: `${color}`,
        background: `${background}`,
        backdrop: `
          rgba(0,0,123,0.4)
          url(${backdrop})
          left top
          no-repeat
        `
      })
}

// // ELIMINAR ARTICULO DEL CARRITO
// let trash = document.getElementById("trash__can")

// window.onload = function(){ 
//     trash.onclick = eliminarDelCarrito
//     function eliminarDelCarrito(e) {
//         e.preventDefault()
//     }
// }

// MOSTRAR Y OCULTAR CARRITO
let botonCarrito = document.getElementById("boton__carrito")
let carritoDiv = document.getElementById("carrito__div")
let continuarComprando = document.getElementById("boton__continuar")
botonCarrito.onclick = mostrarCarrito
continuarComprando.onclick = mostrarCarrito

function mostrarCarrito() {
    if (carritoDiv.classList.contains("hidden")) {
        carritoDiv.classList.remove("hidden")
    } else {
        carritoDiv.classList.add("hidden")
    }
}
