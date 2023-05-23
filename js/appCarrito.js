let carrito = [];
let stockProductos = [];

///me guardo los elementos del dom que necesito utilizar
const tabla = document.getElementById('items');
const selectorProductos = document.querySelector('#productos');
const btnAgregar = document.getElementById('agregar');
const btnVaciar = document.getElementById('vaciar');
const btnOrdenar = document.getElementById('ordenar');
const total = document.getElementById('total');


///genero la lista de productos
stockProductos.push(new Guitarra('Nuevo','Fender','Stratocaster',20000,5));
stockProductos.push(new Guitarra('Usado','Gibson','Les Paul',25000,2));
stockProductos.push(new Guitarra('Rota','Cort','C-300',18000,1));

///guardo la lista de productos en el localStorage
localStorage.setItem('stock',JSON.stringify(stockProductos));


pagCargada();

function pagCargada(){
    window.addEventListener('DOMContentLoaded', cargarItems);
    btnVaciar.addEventListener('click', vaciarCarrito)

    //agregar un producto al carrito
    btnAgregar.addEventListener('submit',(elemento) => {
        elemento.preventDefault();
        //de esta forma obtengo el producto elegido
        const productoElegido = stockProductos[+selectorProductos.value];
        const indexCarrito = stockProductos.findIndex((guitarra) => {
            return guitarra.marca === productoElegido.marca
        });
        if (indexCarrito != -1){
            carrito.push(stockProductos[indexCarrito]);
            actualizarElementosCarrito();
        }
    });

    cargarItems();
}

function cargarItems(){
    dropDownList();
}

function dropDownList(){
    stockProductos.forEach((Guitarra, indice) => {
        const option = document.createElement('option');
        option.textContent = `${Guitarra.estado} | ${Guitarra.marca} | ${Guitarra.modelo} | ${Guitarra.cantidad} | ${Guitarra.precio} `;
        option.value = indice;//tomo el indice donde esta el producto
        selectorProductos.appendChild(option);
    })
}

function actualizarElementosCarrito(){
    tabla.innerHTML = '';
    total.innerText = 0;
    carrito.length > 0 ? btnVaciar.setAttribute('disabled', false) :btnVaciar.setAttribute('disabled', true);
    carrito.forEach((item) =>{
        nuevaFila(item);
    });
}

function nuevaFila(){
    //creo la fila
    const fila = document.createElement('tr');
    let td = document.createElement('td');
    //obtengo la posicion del item del carrito
    const posCarrito = carrito.indexOf(Guitarra);

    td.classList.add('font-white');
    td.textContent = Guitarra.estado;
    fila.appendChild(td);

    td.classList.add('font-white');
    td.textContent = Guitarra.marca;
    fila.appendChild(td);

    td.classList.add('font-white');
    td.textContent = Guitarra.modelo;
    fila.appendChild(td);

    td.classList.add('font-white');
    td.textContent = Guitarra.cantidad;
    fila.appendChild(td);

    td.classList.add('font-white');
    td.textContent = Guitarra.precio;
    fila.appendChild(td);

    fila.appendChild(td);

    ///creando boton eleminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-danger';
    btnEliminar.textContent = 'Eliminar';

    btnEliminar.onclick = () => {
        carrito.splice(posCarrito,1); //posicion y cantidad de elementos
        actualizarElementosCarrito();
        localStorage.setItem('carrito',JSON.stringify(carrito));
    }

    td = document.createElement('td');
    td.appendChild(btnEliminar);
    fila.appendChild(td);
    tabla.appendChild(fila);
    btnVaciar.removeAttribute('disabled', false);

    //hago el calculo total que tengo ahora

    total.innerText = carrito.reduce((acumulador,item) => acumulador + Guitarra.precio * Guitarra.cantidad,0);
}

function vaciarCarrito(){
    carrito = [];
    localStorage.setItem('carrito',JSON.stringify('carrito'));
    actualizarElementosCarrito();
}