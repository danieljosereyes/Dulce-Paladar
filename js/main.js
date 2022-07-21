
const contenedorProductos = document.getElementById('contenedor--Productos')
contenedorProductos.className = "contenedor--Productos"

class producto {
    constructor(id, nombre, precio, cantidad, imagen, link){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.imagen = imagen
        this.link = link
}}

const productos = [
    new producto(1, "Flan Vegamo", 1, 10, "../imagenes/Flan Vegamo.jpg", `href="productos/1-producto.html"`),
    new producto(2, "Berries and Almond Cake", 10, 2, "../imagenes/Berries and Almond Cake.png", `href="productos/2-producto.html"`),
    new producto(3, "Tarta de crema y frutas frescas", 2, 7, "../imagenes/Tarta de crema y frutas frescas.jpg", `href="productos/3-producto.html"`),
    new producto(4, "Pastel de Naranja", 2, 7, "../imagenes/Pastel de Naranja.jpg", `href="productos/4-producto.html"`),
]


productos.forEach((item) => {
    const div = document.createElement('div')
    div.innerHTML = `<a ${item.link}>
                          <article class="cajas--productos" >	
                                <img src="${item.imagen}" alt="">
                                <h2>${item.nombre}</h2>
                                <p>${item.precio}</p>
                            </article>
                        </a>
                         `
    contenedorProductos.appendChild(div)
})

