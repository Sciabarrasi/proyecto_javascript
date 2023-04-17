/*validarEdad();*/

ejecutarSimulador();

function ejecutarSimulador(){

    validarEdad();
    comenzarCompra();
    precioGuitarra();
    debitar();
    compraFinalizada();
}

function validarEdad(){
    let edadUsuario = prompt("Ingrese su edad para poder continuar");
    while(edadUsuario < 18){
        edadUsuario = prompt("Tu edad debe ser mayor o igual a 18, vuelve a ingresarla para poder continuar.");
    }
}

function comenzarCompra(){
    alert("Bienvenido a la casa de guitarras. Actualmente tenemos en stock las siguientes guitarras eléctricas: Gibson Les Paul, Fender Stratocaster, LTD GH-200, Cort X-300. Por favor, escribe el nombre de la guitarra que comprarás respetando sus mayúsculas.");
    let compraGuitarra = prompt("Ingrese la marca de la guitarra que comprará.");
    switch(compraGuitarra){
        case "Gibson Les Paul":
            alert("Gibson Les Paul vale $20000"); break;
        case "Fender Stratocaster":
            alert("Fender Statocaster vale $25000"); break;
        case "LTD GH-200":
            alert("LTD GH-200 vale $30000"); break;
        case "Cort X-300":
            alert("Cort X-300 vale $35000"); break;
        default:
            alert("Esa guitarra actualmente no está en nuestro stock, recarga la página para comenzar denuevo.");break;
    }
}

function precioGuitarra(){
    let tieneDinero = prompt("¿Tiene los fondos necesarios para comprar ésta guitarra?");
    if (tieneDinero == 'si'){
        alert("En el siguiente bloque se le pedirá su tarjeta de débito para verificar si tiene saldo suficiente.");
    }else{
        alert("Fondos insuficientes, recargue la página y comience denuevo.");
    }
}

function debitar(){
    let nroTarjeta = prompt("Ingrese su tarjeta de débito para poder debitarle el valor de la guitarra que comprará");
}

function compraFinalizada(){
    alert("Débito realizado con éxito! Recibirá su pedido en los próximos 5 días hábiles, gracias por su compra!");
}
