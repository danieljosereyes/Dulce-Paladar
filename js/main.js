class producto {
    constructor(id, nombre, precio, cantidad, imagen){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.imagen = imagen
}}

const productos = [
    new producto(1, "Flan Vegamo", 1, 10, "../imagenes/Flan Vegamo.jpg"),
    new producto(2, "Berries and Almond Cake", 10, 2, "../imagenes/Berries and Almond Cake.png"),
    new producto(3, "Tarta de crema y frutas frescas", 2, 7, "../imagenes/Tarta de crema y frutas frescas.jpg"),
    new producto(4, "Pastel de Naranja", 2, 7, "../imagenes/Pastel de Naranja.jpg"),
]

mostrarProductos()

function mostrarProductos() {
    productos.forEach((item) => {
        const div = document.createElement('div')
        div.innerHTML = `
                         <article class="cajas--productos" >	
                           <img src="${item.imagen}" alt="">
                           <h2>${item.nombre}</h2>
                           <p>${item.precio}</p>
                         </article>
                        
                         `
        contenedorProductos.appendChild(div)
    })
}



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
    const hacerComentario = document.createElement("div");
    const botonResponder = document.createElement("button");
    botonResponder.textContent = "Responder";

    const botonMeGusta = document.createElement("button");
    botonMeGusta.textContent = "Me Gusta";

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