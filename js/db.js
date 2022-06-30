
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


