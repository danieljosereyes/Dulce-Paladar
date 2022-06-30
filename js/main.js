
const contenedorProductos = document.getElementById('contenedor--Productos')
contenedorProductos.className = "contenedor--Productos"

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



