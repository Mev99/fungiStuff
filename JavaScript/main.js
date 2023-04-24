// NOTA: "fungi" es el plural de "fungus".
// DECLARACION DEL ARRAY Y CLASE.
const fungi = []

class Fungus {
    constructor(id, nombre, clasificacion, precioXGramo, unicelular, letal, stock, img) {
        this.id = id
        this.nombre = nombre
        this.clasificacion = clasificacion
        this.precioXGramo = precioXGramo
        this.unicelular = unicelular
        this.letal = letal
        this.stock = stock
        this.img = img
    }
}

function newFungus(id, nombre, clasificacion, precioXGramo, unicelular, letal, stock, img) {
    let fungus1 = new Fungus(id, nombre, clasificacion, precioXGramo, unicelular, letal, stock, img)
    fungi.push(fungus1)
}

newFungus(1, "Levadura", "Levaduras", 25, true, false, 500, "item-a")
newFungus(2, "Psilocibina", "Basidiomycota", 3500, false, false, 500, "item-b")
newFungus(3, "Melena de león", "Basidiomycota", 1383, false, false, 500, "item-c")
newFungus(4, "penicilina", "deuteromycetes", 35000, true, false, 500, "item-d")
newFungus(5, "Amanita Muscaria", "Basidiomycota", 5500, false, true, 500, "item-e")


//RENDER DE CARDS Y CARRITO

let carrito = []
let crearCarritoDiv = document.createElement("div")
crearCarritoDiv.id = "carrito__div"
let capturarCarrito = document.getElementById("carrito__div")


let capturarDiv = document.getElementById("card__div")

renderCard(fungi, capturarDiv)

function renderCard(arrayDeFungus, contenedor) {
    contenedor.innerHTML = ""
    crearCards = arrayDeFungus.forEach(fungus => {
        let crearDiv = document.createElement("div")
        crearDiv.className = "card__fungus"
        crearDiv.innerHTML = `
	<div class="row">
    <div class="col-md-4 col-sm-6 col-xs-12">
    <div class="card">
    <div class="cover ${fungus.img}">
    <h1>${fungus.nombre}</h1>
    <span class="price">$${fungus.precioXGramo}/g</span>
    <div class="card-back">
    <a href="#" id="${fungus.id}" class="anadir__carrito">Añadir al carrito</a>
    <a href="#" id="" class="detalles">Detalles</a>
    </div>
    </div>
    </div>
    </div>`
        contenedor.append(crearDiv)

        let boton = document.getElementById(`${fungus.id}`)
        boton.onclick = agregarProductoAlCarrito
    })
}

//Busqueda de articulos (render con filter)
let searchInput = document.getElementById("search__input")
let searchBtn = document.getElementById("search__btn")
let searchForm = document.getElementById("search__form")
searchBtn.onclick = filtrarCard

function filtrarCard(e) {
    // if (searchInput.value == "") {
    //     e.preventDefault()
    //     let searchError = searchInput.cloneNode(true)
    //     searchError.id = "search__problemo"
    //     searchInput.searchForm.replaceChild(searchError, searchInput)
    // } else
    e.preventDefault()
    let filtrar = fungi.filter(Element => Element.nombre.toLowerCase().includes(searchInput.value.toLowerCase()))
    renderCard(filtrar, capturarDiv)
}

//carrito
function agregarProductoAlCarrito(e) {
    e.preventDefault()
    let buscaProductoID = fungi.find(fungus => fungus.id == e.target.id)
if (carrito.some(fungus => fungus.id == buscaProductoID.id)) {
    let pos = carrito.findIndex(fungus => fungus.id == buscaProductoID.id)
    carrito[pos].gramos++
    carrito[pos].subtotal = carrito[pos].precioXGramo * carrito[pos].gramos
} else {
    carrito.push({
        id: buscaProductoID.id,
        nombre: buscaProductoID.nombre,
        precioXGramo: buscaProductoID.precioXGramo,
        gramos: 1,
        subtotal: buscaProductoID.precioXGramo
    })
}}