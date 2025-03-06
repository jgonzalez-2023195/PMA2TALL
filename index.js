/* Instrucciones Ejercicio 1
Ejercicio 1.1

Define un objeto llamado producto con las siguientes propiedades:
 
nombre (string): el nombre del producto.
precio (number): el precio del producto.
disponible (boolean): si está disponible o no.
Muestra la información del producto en la consola con un formato claro.
 
Calcula e imprime el precio del producto con un descuento del 10%. */

let product = {
    nombre: 'Xiaomi Redmi Buds 4 active', 
    price: 141,
    discountedPrice: 0,
    available: true}

let newPrice = product.price * 0.1
product.discountedPrice = newPrice
console.log('El producto es: ', product);

/* Ejercicio 1.2
Define un array llamado carrito que contenga varios objetos, 
donde cada objeto represente un producto con las siguientes propiedades:
 
nombre (string): nombre del producto.
precio (number): precio unitario del producto.
cantidad (number): cantidad del producto en el carrito.
Calcula e imprime lo siguiente:
 
La lista de productos en el carrito con su precio total por producto (precio * cantidad).
El costo total de todos los productos en el carrito. */

let cart = []
const newProduct1 = {
    nombre: 'Xiaomi Redmi Buds 4 active', 
    price: 141,
    quantity: 3,
    totalPrice: 0
}
let totalPrice = newProduct1.price * newProduct1.quantity
newProduct1.totalPrice = totalPrice
cart.push(newProduct1)

const newProduct2 = {
    nombre: 'Xiaomi Redmi Buds 4 lite', 
    price: 150,
    quantity: 4,
    totalPrice: 0
}
let totalPrice1 = newProduct2.price * newProduct2.quantity
newProduct2.totalPrice = totalPrice1
cart.push(newProduct2)

let totalCartPrice = cart.reduce((total, product) => total + product.totalPrice, 0)
console.log('Carrito: ', cart);
console.log('El costo total del carrito: ', cart, 'es de: ', `$ ${totalCartPrice.toFixed(2)}`); 

/* Ejercicio 1.3
Define un array llamado inventario, donde cada elemento sea un objeto que represente un producto con las siguientes propiedades:
 
id (number): identificador único del producto.
nombre (string): nombre del producto.
precio (number): precio unitario del producto.
stock (number): cantidad disponible en inventario.
Realiza las siguientes operaciones:
 
Lista todos los productos en el inventario con su información detallada.
Busca un producto por su id y muestra su información.
Permite realizar una "compra" simulada:
Se recibe el id del producto y la cantidad deseada.
Si hay suficiente stock, actualiza el inventario y muestra el costo total de la compra.
Si no hay suficiente stock, muestra un mensaje indicando el problema.
Calcula e imprime el valor total del inventario (precio * stock de cada producto). */

let inventario = []
const newProduct3 = {
    id: 1,
    nombre: 'Xiaomi Redmi Buds 4 lite', 
    price: 150,
    stock: 5
}
inventario.push(newProduct3)

const newProduct4 = {
    id: 2,
    nombre: 'Xiaomi Redmi Buds 4 active', 
    price: 141,
    stock: 5
}
inventario.push(newProduct4)

const newProduct5 = {
    id: 3,
    nombre: 'Xiaomi Redmi Buds 4 PRO', 
    price: 160,
    stock: 5
}
inventario.push(newProduct5)

function busca(id) {
    const producto = inventario.find(p => p.id === id);
    if (producto) {
        console.log(`Producto encontrado: ID ${producto.id} - ${producto.nombre}`)
        return producto
    } else {
        throw new Error(`No se encontró ningún producto con ID ${id}`)
    }
}

function compra(id, cantidad) {
    const producto = busca(id)
    if(cantidad <= 0) return console.log('La compra no se puede realizar');
    if(producto.stock < cantidad) return console.log('Ya no hay stock');
    let newStock = producto.stock - cantidad
    producto.stock = newStock
    const total = producto.price * cantidad
    const message = `Compra realizada con exito, has comprado ${producto.nombre}, en cantidad de: ${cantidad} y el total a pagar es de ${total}`
    return message
}

function valorTotal() {
    console.log('Desglose del valor del inventario:');
    const valorTotal = inventario.reduce((total, producto) => {
        const valorProducto = producto.price * producto.stock;
        console.log(`${producto.nombre}: $${producto.price} x ${producto.stock} = $${valorProducto}`);
        return total + valorProducto;
    }, 0);
    console.log(`Valor total del inventario: $${valorTotal}`);
    return valorTotal;
}

console.log(busca(2))
console.log(compra(2, 2))
console.log('Inventario: ', inventario)
console.log(valorTotal());

//Regla general de la progra, no superar mas de 120 caracteres