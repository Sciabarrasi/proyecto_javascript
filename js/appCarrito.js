let productos = [];

const selectProductos = document.querySelector('#productos');

///genero la lista de productos
productos.push(new Guitarra('Nuevo','Fender','Stratocaster',20000,5));
productos.push(new Guitarra('Usado','Gibson','Les Paul',25000,2));
productos.push(new Guitarra('Rota','Cort','C-300',18000,1));

///guardo la lista de productos en el localStorage
localStorage.setItem('productos',JSON.stringify(productos));

document.addEventListener('DOMContentLoaded', () => {
    productos = JSON.parse(localStorage.getItem('productos'));
    productos = (productos !== null) ? carrito : [];
    productos.length > 0 && dropDownList();
})

function dropDownList(){
    productos.forEach((Guitarra) => {
        const option = document.createElement('option');
        option.textContent = `${Guitarra.estado} | ${Guitarra.marca} | ${Guitarra.modelo} | ${Guitarra.precio} | ${Guitarra.cantidad}`;
        option.value = productos.indexOf(Guitarra);
        selectProductos.appendChild(option);
    });
}