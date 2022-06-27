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

if (usuarioAdmin){
  usuario = usuarioAdmin
} else {
  usuario = prompt('ingrese usuario')
  localStorage.setItem("user", usuario)
}

const headerUsuario = document.getElementById("bienvenido")
headerUsuario.innerHTML = `<h4>Bienvenido ${usuario}</h4>`

const mainUsuario = document.querySelector('.main--usuario')
mainUsuario.innerHTML = `<h2>Bienvenido ${usuario}</h2>`


const contenedorProductos = document.getElementById('contenedor--Productos')
contenedorProductos.className = "blue"

