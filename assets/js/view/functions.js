// Cerrar modal tienda
function closeModal() {
    const closeModal = document.querySelector("#close_modal");
    if(closeModal) {
        const modalTienda = document.querySelector("#modal_tienda");
        closeModal.addEventListener("click", (e)=>{  
            e.preventDefault();
            modalTienda.style.display = "none";
        });
    }
}

// Función para listar cafés
function listCoffee() {

    const tiendaContainer = document.querySelector("#tienda-products");
    
    if (tiendaContainer) {

        const modalTienda = document.querySelector("#modal_tienda");
        const modalProductName = document.querySelector("#product-name");
        const modalProductTotal = document.querySelector("#product-price");
        const modalProductMore = document.querySelector("#product-add-more");

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
                tiendaItemButton.id = coffee.id;
    
                //Muestro los elementos
                tiendaContainer.appendChild(tiendaItem);
                tiendaItem.appendChild(tiendaItemImage);
                tiendaItem.appendChild(tiendaItemTitle);
                tiendaItem.appendChild(tiendaItemDescription);
                tiendaItem.appendChild(tiendaItemPrice);
                tiendaItem.appendChild(tiendaItemButton);

                // Agregar al carrito
                tiendaItemButton.addEventListener("click", (e)=>{
                    e.preventDefault();
                    modalProductName.innerHTML = coffee.name;
                    modalProductTotal.innerHTML = coffee.price;
                    document.body.appendChild(modalTienda);
                    modalTienda.style.display = "block";

                    modalProductMore.addEventListener("click", (e)=>{  
                        e.preventDefault();
                        modalTienda.style.display = "none";
                    });
                });
            }
        );
    }

    closeModal();
    
};

// Función para listar eventos
function listEvents() {

    const eventsContainer = document.querySelector("#events-items");

    if(eventsContainer) {
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
                const eventoItemAddress = document.createElement("p");
    
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
};

// Abrir carrito
function openCart() {
    const cartIcon = document.querySelector("#icon_cart");
    const cartContainer = document.querySelector("#carrito_container");

    cartIcon.addEventListener("click", (e)=>{  
        e.preventDefault();
        cartContainer.classList.toggle('show_cart');
    });
}

