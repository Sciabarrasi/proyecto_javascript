/// clase del item del carrito

class Item{
    producto; //que tipo de producto
    cantidad; //que cantidad quiere

    constructor(producto,cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }

    //metodos/acciones
    precioTotal(){
        return this.cantidad * this.producto.precio;
    }
}