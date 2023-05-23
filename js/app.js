/*
const carrito = [new Guitarra('Nuevo','Fender','Stratocaster',20000,5),new Guitarra('Usado','Gibson','Les Paul',25000,2),new Guitarra('Rota','Cort','C-300',18000,1)];


function mostrarTablaV2() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = ``; ///vacio la tabla limpiando el innerHTML
    let counter = 1;

    carrito.forEach((item) => { ///por cada uno de los items de mi carrito, genero una fila
     let tr = document.createElement('tr'); ///creo una fila
     let th = document.createElement('th'); ///creo el headear de la fila
     th.textContent = counter;
     ///le agregue el th como hijo de la fila
     tr.appendChild(th);

     ///crear la celda para el nombre del item
     let td = document.createElement('td');
     td.textContent = item.estado;
     tr.appendChild(td);

     //creo la celda para la marca
     td = document.createElement('td');
     td.textContent = item.marca;
     tr.appendChild(td);

     //creo la celda para el modelo
     td = document.createElement('td');
     td.textContent = item.modelo;
     tr.appendChild(td);

     ///creo la celda para la cantidad
     td = document.createElement('td');
     td.textContent = item.cantidad;
     tr.appendChild(td);

     ///creo la celda para el precio
     td = document.createElement('td');
     td.textContent = item.precio;
     tr.appendChild(td);

     ////appendeo la fila a la tabla (el body)
     tabla.appendChild(tr);

     counter++;
   });
  }


  mostrarTablaV2()
  */