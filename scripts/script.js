function renderCategory(dishesArray, elementId) {
    let container = document.getElementById(elementId);
    container.innerHTML = "";

    for (let i = 0; i < dishesArray.length; i++) {
        let dish = dishesArray[i];
        container.innerHTML += getMenuTemplate(dish);
    }
}

function init() {
    renderCategory(dishesData.sandwiches, 'content-sandwiches');
    renderCategory(dishesData.sweets, 'content-sweets');
    renderCategory(dishesData.coffee, 'content-coffee');
    renderCategory(dishesData.shakes, 'content-shakes');
    renderCart();
}

// Hilfsfunktion zur Formatierung der Preise (z.B. 9.40 -> 9,40 €)
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
}

function renderBasket() {
    let basketRef = document.getElementById('basket-wrapper');

    let subtotal = calculateSubtotal();
    let deliveryCost = 5.00;
    let total = subtotal + deliveryCost;

    basketRef.innerHTML = getBasketTemplate(subtotal, deliveryCost, total);

    updateBasket();
}

function getBasketTemplate(subtotal, deliveryCost, total) {
    return `
        <h2 class="basket-header">Warenkorb</h2>
        <div id="basket-items"></div>
        <div class="basket-summary">
            <div class="basket-line">
                <span>Zwischensumme</span>
                <span>${subtotal} €</span>
            </div>
            <div class="basket-line">
                <span>Lieferkosten</span>
                <span>${deliveryCost} €</span>
            </div>
            <div class="basket-line">
                <strong>Gesamt</strong>
                <strong>${total} €</strong>
            </div>
        </div>
    `;
}

function getBasketItemTemplate(dish, index) {
    return `
        <div class="basket-items">
            <div class="basket-item-title">
                <h4>${dish.name}</h4>
            </div>
            <div class="basket-item-controls">
                <img class="basket-items-position" onclick="decreaseQuantity(${index})" src="./assets/icons/minus.png">
                <span>${dish.quantity}x</span>
                <img class="basket-items-position" onclick="increaseQuantity(${index})" src="./assets/icons/plus.png">
                <span>${(dish.price * dish.quantity).toFixed(2)}€</span>
                <img class="basket-items-position" onclick="removeFromBasket(${index})" src="./assets/icons/trash.png">
            </div>
        </div>
    `;
}

function updateBasket() {
    let basketItemsRef = document.getElementById('basket-items');
    basketItemsRef.innerHTML = "";

    if (cart.length === 0) {
        cartItemsRef.innerHTML = getEmptyBasketTemplate();
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        cartItemsRef.innerHTML += getCartItemTemplate(cart[i], i);
    }
}

function getEmptyBasketTemplate() {
    return `
        <div class="mobile-cart-empty">
            <p>Der Warenkorb ist leer.</p>
        </div>
    `;
}

function getBasketAmountTemplate(subtotal, deliveryCost) {
    const total = subtotal + deliveryCost;
    return `
        <div class="cart-line">
            <span>Zwischensumme</span>
            <span>${subtotal.toFixed(2)} €</span>
        </div>
        <div class="cart-line">
            <span>Lieferkosten</span>
            <span>${deliveryCost.toFixed(2)} €</span>
        </div>
        <div class="cart-line">
            <strong>Gesamt</strong>
            <strong>${total.toFixed(2)} €</strong>
        </div>
    `;
}

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