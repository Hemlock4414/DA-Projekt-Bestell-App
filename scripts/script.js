let basket = [];

function renderCategory(dishesArray, elementId) {
    let container = document.getElementById(elementId);
    container.innerHTML = "";

    for (let i = 0; i < dishesArray.length; i++) {
        let dish = dishesArray[i];
        container.innerHTML += getMenuTemplate(dish, elementId, i);
    }
}

function init() {
    renderCategory(dishesData.sandwiches, 'content-sandwiches');
    renderCategory(dishesData.sweets, 'content-sweets');
    renderCategory(dishesData.coffee, 'content-coffee');
    renderCategory(dishesData.shakes, 'content-shakes');
    renderBasket();
    createMobileOverlay();
}

// Hilfsfunktion zur Formatierung der Preise (z.B. 9.40 -> 9,40 €)
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
}

// Gericht zum Warenkorb hinzufügen
function addToBasket(category, dishIndex) {
    let dish = dishesData[category][dishIndex];
    
    // Prüfen ob das Gericht bereits im Warenkorb ist
    let existingItemIndex = basket.findIndex(item => 
        item.name === dish.name && item.category === category
    );
    
    if (existingItemIndex !== -1) {
        // Menge erhöhen wenn bereits vorhanden
        basket[existingItemIndex].quantity++;
    } else {
        // Neues Item hinzufügen
        basket.push({
            name: dish.name,
            description: dish.description,
            price: dish.price,
            quantity: 1,
            category: category
        });
    }
    
    renderBasket();
    updateMobileOverlay();
}

// Warenkorb komplett rendern
function renderBasket() {
    let basketRef = document.getElementById('basket-wrapper');
    
    let subtotal = calculateSubtotal();
    let deliveryCost = 5.00;
    let total = subtotal + deliveryCost;

    basketRef.innerHTML = getBasketTemplate(subtotal, deliveryCost, total);
    
    // Warenkorb-Items rendern
    updateBasket();
}

function updateBasket() {
    let basketItemsRef = document.getElementById('basket-items');
    
    if (!basketItemsRef) return;
    
    basketItemsRef.innerHTML = "";

    if (basket.length === 0) {
        basketItemsRef.innerHTML = getEmptyBasketTemplate();
        return;
    }

    for (let i = 0; i < basket.length; i++) {
        basketItemsRef.innerHTML += getBasketItemTemplate(basket[i], i);
    }
}

// Warenkorb-Funktionen
function increaseQuantity(index) {
    basket[index].quantity++;
    renderBasket();
    updateMobileOverlay();
}

function decreaseQuantity(index) {
    if (basket[index].quantity > 1) {
        basket[index].quantity--;
    } else {
        removeFromBasket(index);
        return;
    }
    renderBasket();
    updateMobileOverlay();
}

function removeFromBasket(index) {
    basket.splice(index, 1);
    renderBasket();
    updateMobileOverlay();
}

function calculateSubtotal() {
    let subtotal = 0;
    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].price * basket[i].quantity;
    }
    return subtotal;
}

// Mobile Warenkorb Funktionen

function createMobileOverlay() {
    // Prüfen ob das Overlay bereits existiert
    if (document.getElementById('mobile-basket-overlay')) {
        return;
    }
    
    // Overlay zum body hinzufügen
    const overlay = document.createElement('div');
    overlay.id = 'mobile-basket-overlay';
    overlay.className = 'mobile-basket-overlay';
    document.body.appendChild(overlay);
    
    updateMobileOverlay();
}

function updateMobileOverlay() {
    const overlayRef = document.getElementById('mobile-basket-overlay');
    if (!overlayRef) return;
    
    const subtotal = calculateSubtotal();
    const deliveryCost = 5.00;
    const total = subtotal + deliveryCost;

    overlayRef.innerHTML = getOverlayMobile(subtotal, deliveryCost, total);
}

function toggleMobileBasket() {
    const overlay = document.getElementById('mobile-basket-overlay');
    if (overlay) {
        overlay.classList.toggle('active');
        
        // Body-Scroll nur steuern wenn sich der Zustand ändert
        if (overlay.classList.contains('active')) {
            document.body.classList.add('no-scroll');
            updateMobileOverlay(); // Nur beim Öffnen aktualisieren
        } else {
            document.body.classList.remove('no-scroll');
        }
    }
}

function closeMobilebasket() {
    const overlay = document.getElementById('mobile-basket-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

function renderMobilebasketItems() {
    if (basket.length === 0) {
        return getEmptyBasketTemplate();
    }

    let itemsHTML = "";
    for (let i = 0; i < basket.length; i++) {
        itemsHTML += getBasketItemTemplate(basket[i], i);
    }
    return itemsHTML;
}

// Bestellung aufgeben
function placeOrder() {
    if (basket.length === 0) return;

    // Warenkorb leeren
    basket = [];
    
    const confirmationHTML = getOrderConfirmationMessage();

    // Container für mobile und desktop
    const basketWrapper = document.getElementById('basket-wrapper');
    const mobileOverlay = document.getElementById('mobile-basket-overlay');

    // Einfügen der Bestätigung
    if (basketWrapper) {
        basketWrapper.innerHTML = confirmationHTML;
    }
    if (mobileOverlay && mobileOverlay.classList.contains('active')) {
        mobileOverlay.innerHTML = confirmationHTML;
    }

    // Nach 3 Sekunden die Meldung wieder ausblenden und normalen leeren Warenkorb zeigen
    setTimeout(() => {
        renderBasket();
        updateMobileOverlay();
    }, 3000);
}



// Experimentell

// function renderBasket() {
//     let basketRef = document.getElementById('basket-wrapper');

//     let subtotal = calculateSubtotal();
//     let deliveryCost = 5.00;
//     let total = subtotal + deliveryCost;

//     basketRef.innerHTML = getBasketTemplate(subtotal, deliveryCost, total);

//     updateBasket();
// }

// function getBasketTemplate(subtotal, deliveryCost, total) {
//     return `
//         <h2 class="basket-header">Warenkorb</h2>
//         <div id="basket-items"></div>
//         <div class="basket-summary">
//             <div class="basket-line">
//                 <span>Zwischensumme</span>
//                 <span>${subtotal} €</span>
//             </div>
//             <div class="basket-line">
//                 <span>Lieferkosten</span>
//                 <span>${deliveryCost} €</span>
//             </div>
//             <div class="basket-line">
//                 <strong>Gesamt</strong>
//                 <strong>${total} €</strong>
//             </div>
//         </div>
//     `;
// }

// function getBasketItemTemplate(dish, index) {
//     return `
//         <div class="basket-items">
//             <div class="basket-item-title">
//                 <h4>${dish.name}</h4>
//             </div>
//             <div class="basket-item-controls">
//                 <img class="basket-items-position" onclick="decreaseQuantity(${index})" src="./assets/icons/minus.png">
//                 <span>${dish.quantity}x</span>
//                 <img class="basket-items-position" onclick="increaseQuantity(${index})" src="./assets/icons/plus.png">
//                 <span>${(dish.price * dish.quantity).toFixed(2)}€</span>
//                 <img class="basket-items-position" onclick="removeFromBasket(${index})" src="./assets/icons/trash.png">
//             </div>
//         </div>
//     `;
// }

// function updateBasket() {
//     let basketItemsRef = document.getElementById('basket-items');
//     basketItemsRef.innerHTML = "";

//     if (basket.length === 0) {
//         basketItemsRef.innerHTML = getEmptyBasketTemplate();
//         return;
//     }

//     for (let i = 0; i < basket.length; i++) {
//         basketItemsRef.innerHTML += getBasketItemTemplate(basket[i], i);
//     }
// }

// function getEmptyBasketTemplate() {
//     return `
//         <div class="mobile-basket-empty">
//             <p>Der Warenkorb ist leer.</p>
//         </div>
//     `;
// }

// function getBasketAmountTemplate(subtotal, deliveryCost) {
//     const total = subtotal + deliveryCost;
//     return `
//         <div class="basket-line">
//             <span>Zwischensumme</span>
//             <span>${subtotal.toFixed(2)} €</span>
//         </div>
//         <div class="basket-line">
//             <span>Lieferkosten</span>
//             <span>${deliveryCost.toFixed(2)} €</span>
//         </div>
//         <div class="basket-line">
//             <strong>Gesamt</strong>
//             <strong>${total.toFixed(2)} €</strong>
//         </div>
//     `;
// }

// // Funktion zur Initialisierung der gesamten Speisekarte
// function init() {
//     renderSandwiches();
//     renderSweets();
//     renderCoffee();
//     renderShakes();
// }

// // Funktion zum Rendern der Sandwiches mit For-Schleife
// function renderSandwiches() {
//     let menuSandwiches = document.getElementById('content-sandwiches');
//     menuSandwiches.innerHTML = "";
    
//     for (let i = 0; i < dishesSandwiches.length; i++) {
//         menuSandwiches.innerHTML += getSandwichTemplate(i);
//     }
// }

// // Funktion zum Rendern der Süßspeisen mit For-Schleife
// function renderSweets() {
//     let menuSweets = document.getElementById('content-sweets');
//     menuSweets.innerHTML = "";
    
//     for (let i = 0; i < dishesSweets.length; i++) {
//         menuSweets.innerHTML += getSweetsTemplate(i);
//     }
// }

// // Funktion zum Rendern der Kaffee-Einträge mit For-Schleife
// function renderCoffee() {
//     let menuCoffee = document.getElementById('content-coffee');
//     menuCoffee.innerHTML = "";
    
//     for (let i = 0; i < dishesCoffee.length; i++) {
//         menuCoffee.innerHTML += getCoffeeTemplate(i);
//     }
// }

// // Funktion zum Rendern der Shakes mit For-Schleife
// function renderShakes() {
//     let menuShakes = document.getElementById('content-shakes');
//     menuShakes.innerHTML = "";
    
//     for (let i = 0; i < dishesShakes.length; i++) {
//         menuShakes.innerHTML += getShakesTemplate(i);
//     }
// }