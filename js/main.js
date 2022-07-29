const contenedorProductos = document.getElementById('contenedor--Productos')
contenedorProductos.className = "contenedor--Productos"

let stock = []

fetch('../json/data.json')
    .then((resp) => resp.json())
    .then((data) => {
    stock = data

    stock.forEach((productos) => {
        const div = document.createElement('div')
        div.innerHTML = div.innerHTML = `<a href="productos/${productos.link}">
                                            <article class="cajas--productos" >	
                                                <img src="../imagenes/${productos.imagen}" alt="">
                                                <h2>${productos.nombre}</h2>
                                                <p>${productos.precio}</p>
                                            </article>
                                        </a>
                                        `
        contenedorProductos.appendChild(div)
    })
})