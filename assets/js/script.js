// Disclaimer inicial
alert("Le presentamos las opciones disponibles dentro de Chillin'")

// Defino la variable de tipo de café
let coffeeType; 

// Listado de cafés disponibles
const coffees = [
    {
        id: 1,
        image: "../assets/img/product_3.png",
        name: "Iced Vanilla Latte",
        description: "Bebida a base de espresso y jarabe de vainilla con hielo.",
        price: "$550"
    },
    {
        id: 2,
        image: "../assets/img/product_2.png",
        name: "Caramel Toffee Latte",
        description: "Bebida a base de café, salsa de caramelo, toffee y canela.",
        price: "$600"

    },
    {
        id: 3,
        image: "../assets/img/product_1.png",
        name: "Flat White",
        description: "Bebida a base de espresso que contiene leche cremada.",
        price: "$610"
    },
    {
        id: 4,
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
]

// Función para hacer la selección por prompts y alerts
function selectOption() {
    
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
}


// Función para listar cafés
function listCoffee() {

    const tiendaContainer = document.querySelector("#tienda-products");
    
    coffees.forEach(
        (coffee)=>{
            //Creo elementos
            const tiendaItem = document.createElement("div");
            const tiendaItemImage = document.createElement("img");
            const tiendaItemTitle = document.createElement("h3");
            const tiendaItemDescription = document.createElement("p");
            const tiendaItemPrice = document.createElement("span");
            const tiendaItemButton = document.createElement("a");

            //Defino propiedades y clases
            tiendaItemImage.src = coffee.image;
            tiendaItemImage.alt = coffee.name;
            tiendaItem.classList.add("section__favorites-products--item", "col-md-6", "col-lg-3");
            tiendaItemTitle.innerHTML = coffee.name;
            tiendaItemDescription.innerHTML = coffee.description;
            tiendaItemPrice.innerHTML = coffee.price;
            tiendaItemButton.innerHTML = "Agregar al carrito";
            tiendaItemButton.href= "";

            //Muestro los elementos
            tiendaContainer.appendChild(tiendaItem);
            tiendaItem.appendChild(tiendaItemImage);
            tiendaItem.appendChild(tiendaItemTitle);
            tiendaItem.appendChild(tiendaItemDescription);
            tiendaItem.appendChild(tiendaItemPrice);
            tiendaItem.appendChild(tiendaItemButton);
        }
    );
}

// Función para comprar café
function totalCoffee(quantity){

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

// Función para listar eventos
function listEvents() {

    const eventsContainer = document.querySelector("#events-items");

    events.forEach(
        (event)=>{
            //Creo elementos
            const eventoItem = document.createElement("div");
            const eventoImageContainer = document.createElement("div");
            const eventoTextContainer = document.createElement("div");
            const eventoItemImage = document.createElement("img");
            const eventoItemTitle = document.createElement("h4");
            const eventoItemDescription = document.createElement("h5");
            const eventoItemDate = document.createElement("span");
            const eventoItemAddress = document.createElement("a");

            //Defino propiedades y clases
            eventoItem.classList.add("section__events-event", "row");
            eventoItemImage.src = event.image;
            eventoItemImage.alt = event.name;
            eventoImageContainer.classList.add("section__events-event--image", "col-lg-6", "fadeInLeft");
            eventoTextContainer.classList.add("section__events-event--text", "col-lg-6", "fadeInRight");
            eventoItemTitle.innerHTML = event.name;
            eventoItemDescription.innerHTML = event.description;
            eventoItemDate.innerHTML = "<b>Día y horario:</b> " + event.date;
            eventoItemAddress.innerHTML = "<b>Dirección:</b> " + event.address;

            //Muestro los elementos
            eventsContainer.appendChild(eventoItem);
            eventoItem.appendChild(eventoImageContainer);
            eventoImageContainer.appendChild(eventoItemImage);
            eventoItem.appendChild(eventoTextContainer);
            eventoTextContainer.appendChild(eventoItemTitle);
            eventoTextContainer.appendChild(eventoItemDescription);
            eventoTextContainer.appendChild(eventoItemDate);
            eventoTextContainer.appendChild(eventoItemAddress);
        }
    );
}

// Opciones a seleccionar por el usuario
selectOption();