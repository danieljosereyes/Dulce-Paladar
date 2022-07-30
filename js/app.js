const modalContainerCarrito = document.querySelector('#modal--container_carrito')
const abrirModalCarrito = document.querySelector('#abrir--modal_Carrito')
const cerrarModalCarrito = document.querySelector('#cerrar--modal_Carrito')

abrirModalCarrito.addEventListener('click', () => {
  modalContainerCarrito.classList.add('modal--container_visible')
})

cerrarModalCarrito.addEventListener('click', () => {
  modalContainerCarrito.classList.remove('modal--container_visible')
})

const modalContainer = document.querySelector('#modal--container_usuario')
const abrirModal = document.querySelector('#abrir--modal')
const cerrarModal = document.querySelector('#cerrar--modal')

abrirModal.addEventListener('click', () => {
  modalContainer.classList.add('modal--container_visible')
})

cerrarModal.addEventListener('click', () => {
  modalContainer.classList.remove('modal--container_visible')
})

let usuario
const usuarioAdmin = localStorage.getItem('user')
usuarioAdmin ? usuario = usuarioAdmin : usuario = prompt('ingrese usuario'); localStorage.setItem("user", usuario)

const headerUsuario = document.getElementById("bienvenido")
headerUsuario.innerHTML = `<h4>Bienvenido ${usuario}</h4>`

const mainUsuario = document.querySelector('.main--usuario')
mainUsuario.innerHTML = `<h2>Bienvenido ${usuario}</h2>`

let dbJson = JSON.stringify(usuario)
console.log (dbJson)

let usuarioDB = localStorage.setItem("usuario", dbJson)
console.log(localStorage)

let listaUsuarios = JSON.parse(dbJson)
console.log(listaUsuarios)
