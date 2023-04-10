const productos = [
    { nombre: "harina" , precio: 50 },
    {  nombre: "leche" , precio: 100 },
    { nombre: "gaseosas" , precio: 150 },
    { nombre: "cervezas" , precio: 200 },
    { nombre: "carne" , precio: 250 }
] ;

let carrito = []

let seleccion = prompt("Hola bienvenido a su carrito de comida, desea realizar su pedido si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("desea comprar algo si o no")

}

if(seleccion =="si"){
    alert("a continuacion nuestra lista de productos")
    let TodosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert( TodosLosProductos.join(" - "))
}       else if (seleccion =="no"){
    alert("gracias por visitarnos, vuelva pronto!!!")
}

while(seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0 

    if(producto == "harina" || producto == "leche" || producto == "gaseosas" 
    || producto == "cervezas" || producto == "carne"){
        switch(producto){
            case "harina":
            precio = 50;
            break;
            case "leche":
            precio = 100;
            break;
            case "gaseosas":
            precio = 150;
            break;
            case "cervezas":
            precio = 200;
            break;
            case "carne":
            precio = 250;
            break;
        default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

        carrito.push ({producto, unidades, precio})
        console.log(producto) 
    } else {
        alert("no tenemos ese pruducto")
    }

    seleccion = prompt("desea seguir comprando??")

    while(seleccion === "no"){
        alert("gracias por su compra, vuelva pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es : ${total}`)