//Seccion de comentarios
const comentario = [];
const inputContenedor = document.createElement("div");
const input = document.createElement("input");
input.classList.add("input");
const contenedorComentario = document.querySelector("#contenedor--comentarios");
contenedorComentario.appendChild(inputContenedor);
inputContenedor.appendChild(input);

input.addEventListener("keydown", (e) => {
  teclaEnter(e, null);
});

function teclaEnter(e, enter) {
  if (e.key === "Enter" && e.target.value != "") {
    const nuevoComentario = {
      texto: e.target.value,
      meGusta: 0,
      respuesta: [],
    };
    if (enter === null) {
      comentario.unshift(nuevoComentario);
    } else {
      enter.respuesta.unshift(nuevoComentario);
    }
    e.target.value = "";
    contenedorComentario.innerHTML = "";
    contenedorComentario.appendChild(inputContenedor);
    hacercomentario(comentario, contenedorComentario);
  }
}

function hacercomentario(arreglo, bloque) {
  arreglo.forEach((elementos) => {
    const comentarioContenido = document.createElement("div");
    comentarioContenido.classList.add("comentario-contenido");
    const hacerComentario = document.createElement("div");
    hacerComentario.classList.add("hacer-comentario");
    const botonResponder = document.createElement("button");
    botonResponder.textContent = "RESPONDER";

    botonResponder.addEventListener("click", (e) => {
      const nuevoInput = inputContenedor.cloneNode(true);
      nuevoInput.value = "";
      nuevoInput.focus();
      nuevoInput.addEventListener("keydown", (e) => {
        teclaEnter(e, elementos);
      });
      comentarioContenido.insertBefore(nuevoInput, hacerComentario);
    });

    const botonMeGusta = document.createElement("button");
    botonMeGusta.textContent = "ME GUSTA";

    botonMeGusta.addEventListener("click", (e) => {
      elementos.meGusta++;
      botonMeGusta.textContent = `${elementos.meGusta > 0 ? elementos.meGusta : ""} ME GUSTA`;
    });

    const divContent = document.createElement("div");
    divContent.textContent = elementos.texto;

    const divActions = document.createElement("div");
    comentarioContenido.appendChild(divContent);
    comentarioContenido.appendChild(divActions);

    divActions.appendChild(botonResponder);
    divActions.appendChild(botonMeGusta);

    comentarioContenido.appendChild(hacerComentario);

    if (elementos.respuesta.length > 0) {
      hacercomentario(elementos.respuesta, hacerComentario);
    }
    bloque.appendChild(comentarioContenido);
  });
}

//Carrito de Compras
const contenedorProductos = document.getElementById('contenedor--Productos')
contenedorProductos.className = "contenedor--Productos"
const carritoProductos = document.querySelector("#carrito-productos")
const totalCarrito = document.querySelector('#total-Carrito')
let Carrito
const CarritoLC = JSON.parse(localStorage.getItem('Carrito'))
let stock = []

fetch('../json/data.json')
    .then((resp) => resp.json())
    .then((data) => {
    stock = data

    stock.forEach((productos) => {
        const div = document.createElement('div')
        div.innerHTML = `<article class="cajas--productos" >	
                            <img src="../imagenes/${productos.imagen}" alt="">
                            <h2>${productos.nombre}</h2>
                            <p>${productos.tipo}</p>
                            <button onclick="agregarAlCarrito(${productos.id})" >Agregar al Carrito</button>
                        </article>`
        contenedorProductos.appendChild(div)
    })
})

const renderCarrito = (() => {
  carritoProductos.innerHTML = ``
  Carrito.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')

    div.innerHTML = `<article>
                        <h6>${item.nombre}</h6>
                        <p>${item.precio}</p>
                        <p>${item.cantidad}</p>
                        <button onclick="removerDelCarrito(${item.id})" class="eliminar">X</button>
                      </article>`
                      carritoProductos.append(div)
    })
})

const agregarAlCarrito = (id) => {
  const item = stock.find((producto) => producto.id === id)
  Carrito.push(item)
  localStorage.setItem('Carrito', JSON.stringify(Carrito))
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    icon: 'success',
    title: 'Agregado Correctamente'
  })
  renderCarrito()
  renderTotal()
} 

const renderTotal = (() => {
  let total = 0
  localStorage.setItem('Carrito', JSON.stringify(Carrito))
  Carrito.forEach((producto) => total += producto.precio)
  totalCarrito.innerHTML = total
})

const removerDelCarrito = ((id) => {
  const item = Carrito.find((producto) => producto.id === id)
  const indice = Carrito.indexOf(item)
  Carrito.splice(indice, 1)
  localStorage.setItem('Carrito', JSON.stringify(Carrito))
  Swal.fire({
    position: 'center',
    icon: 'info',
    title: 'Eliminando del carrito',
    showConfirmButton: false,
    timer: 1500
  })
  renderCarrito()
  renderTotal()
})

if (CarritoLC) {
  Carrito = CarritoLC
  renderCarrito()
  renderTotal()
} else {
  Carrito =  []
}