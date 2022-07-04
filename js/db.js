
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


const element2 = document.querySelector('#idPoduct2')


element2.addEventListener('click', (event) => {hola(event)})

function hola (event) {
  console.log(event.target)
  console.log("hola")
}