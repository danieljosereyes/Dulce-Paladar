class producto {
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
}}

const productos = [
    new producto(1, "croassan", 1, 10),
    new producto(2, "flan", 0.5, 7),
    new producto(3, "tarta de crema y frutas", 2, 2),
    new producto(4, "pastel de naranja", 2, 3),
]

const contenedorProductos = document.getElementById('contenedor--Productos')
contenedorProductos.className = "blue"

function mostrarProductos() {
    productos.forEach((item) => {
        const div = document.createElement('div')

        div.innerHTML = `<h3 class="blue">${item.nombre}</h3>
                         <p class="green">Precio: ${item.precio}</p>
                         <p class="yellowgreen">Cantidad: ${item.cantidad}</p>    
                        `
        contenedorProductos.appendChild(div)
    })
}

const textElement = document.getElementById("bienvenido")
const usuario = prompt(`usuario`)
textElement.innerHTML = `Bienvenido ${usuario}`

mostrarProductos()

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
    comentarioContenido.classList.add("comment-container");

    const hacerComentario = document.createElement("div");
    hacerComentario.classList.add("responses-container");
    
    const botonResponder = document.createElement("button");
    botonResponder.textContent = "Responder";

    const botonMeGusta = document.createElement("button");
    botonMeGusta.textContent = "Me Gusta";
/*     botonResponder.addEventListener("click", (e) => {
      const nuevoInput = inputContenedor.cloneNode(true);
      nuevoInput.value = "";
      nuevoInput.focus();
      nuevoInput.addEventListener("keydown", (e) => {
        teclaEnter(e, elementos);
      });
      comentarioContenido.insertBefore(nuevoInput, hacerComentario);
    });
    botonMeGusta.addEventListener("click", (e) => {
      elementos.meGusta++;
      botonMeGusta.textContent = `${
        elementos.meGusta > 0 ? elementos.meGusta : ""
      } Likes`;
    }); */
    const divContent = document.createElement("div");
    divContent.textContent = elementos.texto;

    const divActions = document.createElement("div");
    //commentContainer.appendChild(document.createTextNode(element.text));
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