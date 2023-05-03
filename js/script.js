//creando array de objetos
let guitarras = [];

guitarras.push(new Guitarra("Nueva", "Gibson","Les Paul", 30000));
guitarras.push(new Guitarra("Usada", "Fender","Telecaster", 25000));
guitarras.push(new Guitarra("Nueva", "Fender", "Stratocaster", 35000));
guitarras.push(new Guitarra("Muy Usada", "Cort", "C-300", 30000));

tomarEleccion();

function tomarEleccion(){
    const eleccion = prompt("Ingrese uno de los siguientes números para comenzar.\n" +
    "1) Mostrar la guitarra que busca.\n" +
    "2) Buscar una guitarra por su nombre.\n" +
    "3) Eliminar todas las guitarras de una marca en especifico\n" +
    "4) Agregar una guitarra.\n" +
    "5) Modificar una guitarra");
    ejecutarEleccion(eleccion);
}


function ejecutarEleccion(eleccion){
    switch(eleccion){
        case "1":
            guitarraBuscada(); break;
        case "2":
            buscarGuitarra(); break;
        case "3":
            eliminarTodasLasGuitarrasMarca(); break;
        case "4":
            agregarGuitarra(); break;
        case "5":
            modGuitarra(); break;
        default:
            alert("Opción inexistente");
    }
}


// mostrar la guitarra que busca el usuario
function guitarraBuscada(){
    const inputGuitarra = prompt("Ingrese la marca de guitarras que busca");
    ///de aca hasta q termina la func no tengo idea que hice, pero lo hice.
    const guitarraEncontrada = guitarras.filter((guitarra) => guitarra.marca === inputGuitarra);

    guitarraEncontrada.forEach((guitarra) => console.log(guitarra.marca));
}

// buscar una guitarra por nombre
function buscarGuitarra(){
    const nombreGuitarra = prompt("Ingrese el nombre de la guitarra que busca.");
    const guitarraEncontrada = guitarras.find((guitarra) => guitarra.marca === nombreGuitarra);

    if (guitarraEncontrada){
        console.log(guitarraEncontrada.marca);
    }
}

// eliminar una guitarra por nombre
function eliminarTodasLasGuitarrasMarca(){
    const borrarGuitarra = prompt("Ingrese una marca de guitarra");

    guitarras = guitarras.filter((guitarra) => guitarra.marca != borrarGuitarra);
    console.log(guitarras);
}

// agregar una guitarra
function agregarGuitarra(){
    const guitarraEstado = prompt("Ingrese el estado que quiere que tenga la guitarra nueva");
    const guitarraMarca = prompt("Ingrese la marca que quiere que tenga la guitarra nueva");
    const guitarraModelo = prompt("Ingrese el modelo que quiere que tenga la guitarra nueva");
    const guitarraPrecio = prompt("Ingrese el precio que quiere que tenga la guitarra nueva");

    guitarras.push(new Guitarra(guitarraEstado, guitarraMarca, guitarraModelo, guitarraPrecio));
    console.log(guitarras);
}

// modificar una guitarra
function modGuitarra(){
    const modeloModificada = prompt("Ingrese el modelo de guitarra que quiere modificar");
    const guitarraModded = guitarras.find((guitarra) => guitarra.modelo === modeloModificada);
    const elegirAtributo = prompt("Ingrese que quiere modificar de la guitarra. Puede elegir estado, marca o precio");

    switch(elegirAtributo){
        case 'estado':
            const valorEstado = prompt("¿Como quiere cambiar el estado? Puede elegir nuevo, usado o a reparar");
            guitarraModded.estado = valorEstado;
            break;
        case 'marca':
            const valorMarca = prompt("¿A que marca quiere cambiar? Tenemos en stock: Gibson, Fender, Cort, SLP y ESP");
            guitarraModded.marca = valorMarca;
            break;
        case 'precio':
            const valorPrecio = prompt("¿A que precio quiere modificar?");
            guitarraModded.precio = Number(valorPrecio);
            break;
    }
    console.log(guitarras);
}