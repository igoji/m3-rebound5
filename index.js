/* DOM */

// formulario
let formulario = document.getElementById("user-data")
let enviar = document.getElementById("btn-enviar")

//display
let displayCard = document.getElementById("card-display")
let nombreDisplay = document.getElementById("nombre-display")
let correoDisplay = document.getElementById("correo-display")
let trabajoDisplay = document.getElementById("trabajo-display")
let telefonoDisplay = document.getElementById("telefono-display")
let aboutDisplay = document.getElementById("about-display")
let usuario


/* Funciones */

//constructor de objeto usuario

function nuevoUsuario () {
    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value
    let trabajo = document.getElementById("trabajo").value
    let telefono = document.getElementById("telefono").value
    let about = document.getElementById("about").value

    this.nombre = nombre
    this.correo = correo
    this.trabajo = trabajo
    this.telefono = telefono
    this.about = about
}

//asignar datos del form al display

function displayInfo (){
    nombreDisplay.innerText = usuario.nombre
    correoDisplay.innerText = usuario.correo
    trabajoDisplay.innerText = usuario.trabajo
    telefonoDisplay.innerText = usuario.telefono
    aboutDisplay.innerText = usuario.about
}

/* Event listener */

formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    usuario = new nuevoUsuario()
    displayInfo()
})


