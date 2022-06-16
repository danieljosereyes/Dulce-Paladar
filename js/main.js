let usuario = prompt(`ingrese usuario/admin`)

//usuario 
while (usuario !== `admin`) {
	alert(`usuario incorrecto!`)
	usuario = prompt(`ingrese el usuario/admin`)
}

const saludar = (nombre) => {
        let frase = `hola ${nombre}! Como estas?`
        console.log(frase)
    }
    
    const validarCliente = (edad)=>{
        edad = prompt(`cual es tu edad?`)
        if (edad >= 18) {
            alert ("Puedes pasar.")
        } else {
            alert("no puedes comprar sin un representante.")
        }
    }
saludar(prompt(`cual es tu nombre`))
validarCliente()

//carro de compra
const datos = {
        metodos: {
            encontrar: (torta) => {
                return datos.items.encontrar(item => item.torta = torta);
            },
            remover: (items) => {
                items.forEach(item => {
                    const product = datos.metodos.find(item.torta)
                    product.item - item.item;
                });
                console.log(datos)
            },
        },
        items: [
            {
                torta: 0,
                titulo: "tarta de crema y frutas",
                precio: 7,
                item: 3,
            },
            {
                torta: 1,
                titulo: "flan vegano",
                precio: 7,
                item: 2,
            },  
            {
                torta: 2,
                titulo: "pastel de crema",
                precio: 7,
                item: 5,
            },
        ]
    }