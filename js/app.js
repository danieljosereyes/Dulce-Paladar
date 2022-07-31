//Modal Contenedor Carrito
const modalContainerCarrito = document.querySelector('#modal--container_carrito')
const abrirModalCarrito = document.querySelector('#abrir--modal_Carrito')
const cerrarModalCarrito = document.querySelector('#cerrar--modal_Carrito')

abrirModalCarrito.addEventListener('click', () => {
  modalContainerCarrito.classList.add('modal--container_visible')
})

cerrarModalCarrito.addEventListener('click', () => {
  modalContainerCarrito.classList.remove('modal--container_visible')
})
