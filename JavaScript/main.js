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

newFungus(1, "Levadura", "Levaduras", 25, true, false, 500, "./img/levadura.png")
newFungus(2, "Psilocibina", "Basidiomycota", 3500, false, false, 500, "./img/mazatapec.png")
newFungus(3, "Melena de león", "Basidiomycota", 1383, false, false, 500, "./img/melenaDeLeon.png")
newFungus(4, "penicilina", "deuteromycetes", 35000, true, false, 500, "./img/penicilina.png")
newFungus(5, "Amanita Muscaria", "Basidiomycota", 5500, false, true, 500, "./img/amanitaMuscaria.png")

// COMIENZA LA "INTERACCION" DEL USUARIO CON EL PROGRAMA

//carrito (DOM)
let capturarDiv = document.getElementById("card__div")

let crearCards = fungi.forEach(fungus => {
    let crearDiv = document.createElement("div")
    crearDiv.className = "card__fungus"
    crearDiv.innerHTML = `
	<div class="row">
		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-a">
					<h1>${fungus.nombre}</h1>
					<span class="price">$${fungus.precioXGramo}/g</span>
					<div class="card-back">
						<a href="#">Añadir al carrito</a>
						<a href="#">Detalles</a>
					</div>
				</div>
			</div>
		</div>`

        document.body.append(crearDiv)
        // capturarDiv.append(crearDiv)
        
    console.dir(crearDiv.innerHTML)
    
})
