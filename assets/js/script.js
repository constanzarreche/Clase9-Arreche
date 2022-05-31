// Defino la variable de tipo de café
let coffeeType; 

// Listado de cafés disponibles
const coffees = [
    {
        id: "icedvanillalatte",
        image: "../assets/img/product_3.png",
        name: "Iced Vanilla Latte",
        description: "Bebida a base de espresso y jarabe de vainilla con hielo.",
        price: "$550"
    },
    {
        id: "carameltoffeelatte",
        image: "../assets/img/product_2.png",
        name: "Caramel Toffee Latte",
        description: "Bebida a base de café, salsa de caramelo, toffee y canela.",
        price: "$600"

    },
    {
        id: "flatwhite",
        image: "../assets/img/product_1.png",
        name: "Flat White",
        description: "Bebida a base de espresso que contiene leche cremada.",
        price: "$610"
    },
    {
        id: "capuccino",
        image: "../assets/img/product_4.png",
        name: "Capuccino",
        description: "Bebida preparada con café espreso y leche montada con vapor.",
        price: "$400"
    }
];

// Listado de eventos
const events = [
    {
        id: 1,
        image: "../assets/img/events_4.jpg",
        name: "Coffee Night",
        description: "Vení a degustar lo mejor del café y conocer las sorpresas que tenemos para vos.",
        date: "10 de Agosto 2022 - 21:00hs",
        address: "Cuyo 1590, Martínez, Provincia de Buenos Aires"
    },
    {
        id: 2,
        image: "../assets/img/events_1.jpg",
        name: "Beer & Friends",
        description: "Noche de cerveza de gran variedad, en conjunto con las mejores hamburguesas para todos los gustos.",
        date: "4 de Septiembre 2022 - 21:30hs",
        address: "Cuyo 1590, Martínez, Provincia de Buenos Aires"
    },
    {
        id: 3,
        image: "../assets/img/events_2.jpg",
        name: "Show Night",
        description: "Junto a un espectáculo secreto que tenemos para vos, te ofrecemos platos de gran calidad, bebida de variedad y pasar un momento inolvidable.",
        date: "17 de Septiembre 2022 - 22:00hs",
        address: "Cuyo 1590, Martínez, Provincia de Buenos Aires"
    },
    {
        id: 4,
        image: "../assets/img/events_3.jpg",
        name: "Wine & Dine",
        description: "Te invitamos a probar los mejores vinos y platos gourmet que tenemos para vos.",
        date: "6 de Octubre 2022 - 21:30hs",
        address: "Cuyo 1590, Martínez, Provincia de Buenos Aires"
    }
];



// Función para hacer la selección por prompts y alerts
/*function selectOption() {
    
    let optionSelected = '';
    
    if(optionSelected !== 'Ninguna') {

        optionSelected = prompt('Listado de acciones, escriba la que desea: \n\nListado de cafés\nComprar café\nListado de eventos\nNinguna');
    
        switch(optionSelected) {
            case 'Listado de cafés':
            {
                listCoffee();
                break;
            }
            case 'Comprar café': 
            {
                listCoffee();
                coffeeType = prompt("Ingrese el nombre del café que quiera llevar");
                coffeeQuantity = Number(prompt("¿Cuántos desea llevar?"));
                totalCoffee(coffeeQuantity);
                break;
            }
            case 'Listado de eventos':
            {
                listEvents();
                break;
            }
            default:{
                alert("¿No desea realizar ninguna acción? ¡Lo esperamos la próxima vez!");
                break;
            }
        }
    }
}*/

// Función para comprar café
/*function totalCoffee(quantity){

    const modalTienda = document.querySelector("#modal_tienda");
    const modalTiendaTotal = document.querySelector("#tienda-total");

    while (quantity != 0){
        if (coffeeType == 'Iced Vanilla Latte') {
            let coffeeTotal = quantity * 550;
            modalTiendaTotal.innerHTML = "<b>Usted debe abonar:</b> $" + coffeeTotal;
            break;
        }
        
        if (coffeeType == 'Caramel Toffee Latte') {
            let coffeeTotal = quantity * 600;
            modalTiendaTotal.innerHTML = "<b>Usted debe abonar:</b> $" + coffeeTotal;
            break;
        }
    
        if (coffeeType == 'Flat White') {
            let coffeeTotal = quantity * 610;
            modalTiendaTotal.innerHTML = "<b>Usted debe abonar:</b> $" + coffeeTotal;
            break;
        }

        if (coffeeType == 'Capuccino') {
            let coffeeTotal = quantity * 400;
            modalTiendaTotal.innerHTML = "<b>Usted debe abonar:</b> $" + coffeeTotal;
            break;
        }
    }

    document.body.appendChild(modalTienda);
    modalTienda.style.display = "block";
}
*/


// Listado de cafés
listCoffee();

// Listado de eventos
listEvents();

// Abrir carrito
openCart();