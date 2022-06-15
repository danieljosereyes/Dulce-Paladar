const bakery = document.getElementById('bakery1');

const cargarImagen = (entradas, observador) => {

    entradas.forEach((entrada) => {
        if(entrada.inIntersecting){
            entrada.target.classlist.add('.visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observador.observe(bakery);