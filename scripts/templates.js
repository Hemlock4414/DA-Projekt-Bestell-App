function getMenuTemplate(dish, category, index) {
    return `
        <div class="menu-item" onclick="addToBasket('${category.replace('content-', '')}', ${index})">
            <div class="menu-item-left">
                <h3 class="menu-item-name">${dish.name}</h3>
                <p class="menu-item-description">${dish.description}</p>
                <p class="menu-item-price">${formatPrice(dish.price)}</p>
            </div>
            <div class="menu-item-right">
                <span class="plus-icon">+</span>
            </div>
        </div>
    `;
}

function getBasketTemplate(subtotal, deliveryCost, total) {
    return `
        <div class="basket-content">
            <h2 class="basket-header">Warenkorb</h2>
            <div id="basket-items"></div>
            <div class="basket-summary">
                <div class="basket-line">
                    <span>Zwischensumme</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="basket-line">
                    <span>Lieferkosten</span>
                    <span>${formatPrice(deliveryCost)}</span>
                </div>
                <div class="basket-line basket-total">
                    <strong>Gesamt</strong>
                    <strong>${formatPrice(total)}</strong>
                </div>
                <button class="order-button" ${basket.length === 0 ? 'disabled' : ''}>
                    Bestellen (${formatPrice(total)})
                </button>
            </div>
        </div>
    `;
}

function getBasketItemTemplate(dish, index) {
    return `
        <div class="basket-item">
            <div class="basket-item-header">
                <h4 class="basket-item-name">${dish.name}</h4>
            </div>
            <div class="basket-item-controls">
                <div class="quantity-controls">
                    <img class="quantity-btn" onclick="decreaseQuantity(${index})" src="./assets/icons/minus.png" alt="Weniger">
                    <span class="quantity">${dish.quantity}</span>
                    <img class="quantity-btn" onclick="increaseQuantity(${index})" src="./assets/icons/plus.png" alt="Mehr">
                </div>
                <span class="basket-item-price">${formatPrice(dish.price * dish.quantity)}</span>
                <img class="basket-item-delete" onclick="removeFromBasket(${index})" src="./assets/icons/trash.png" alt="Löschen">
            </div>
        </div>
    `;
}

function getEmptyBasketTemplate() {
    return `
        <div class="basket-empty">
            <p>Der Warenkorb ist leer.</p>
            <p>Fügen Sie Snacks hinzu, um zu bestellen.</p>
        </div>
    `;
}

function getOverlayMobile(subtotal, deliveryCost, total) {
    return `
        <div class="mobile-basket-header" onclick="closeMobilebasket()">
            <h2>Warenkorb</h2>
        </div>
        <div class="mobile-basket-content">
            <div class="mobile-basket-items" id="mobile-basket-items">
                ${renderMobilebasketItems()}
            </div>
            <div class="mobile-basket-summary">
                <div class="basket-line">
                    <span>Zwischensumme</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="basket-line">
                    <span>Lieferkosten</span>
                    <span>${formatPrice(deliveryCost)}</span>
                </div>
                <div class="basket-line basket-total">
                    <strong>Gesamt</strong>
                    <strong>${formatPrice(total)}</strong>
                </div>
                <button class="order-button" ${basket.length === 0 ? 'disabled' : ''}>
                    Bestellen (${formatPrice(total)})
                </button>
            </div>
        </div>
    `;
}


// // Template für Sandwich-Einträge
// function getSandwichTemplate(dataArray[i]) {
//     return `
//         <div class="menu-item">
//             <div class="menu-item-left">
//                 <h2 class="menu-item-title">${dataArray[i].category}<h2>
//                 <h3 class="menu-item-name">${dataArray[i].name}</h3>
//                 <p class="menu-item-description">${dataArray[i].description}</p>
//                 <p class="menu-item-price">${formatPrice(dataArray[i].price)}</p>
//             </div>
//             <div class="menu-item-right"></div>
//         </div>
//     `;
// }

// // Template für Süßspeisen-Einträge
// function getSweetsTemplate(dataArray[i]) {
//     return `
//         <div class="menu-item">
//             <div class="menu-item-left">
//                 <h3 class="menu-item-name">${dataArray[i].name}</h3>            
//                 <p class="menu-item-description">${dataArray[i].description}</p>
//                 <p class="menu-item-price">${formatPrice(dataArray[i].price)}</p>
//             </div>
//             <div class="menu-item-right"></div>
//         </div>
//     `;
// }

// // Template für Kaffee-Einträge
// function getCoffeeTemplate(dataArray[i]) {
//     return `
//         <div class="menu-item">
//             <div class="menu-item-left">
//                 <h3 class="menu-item-name">${dataArray[i].name}</h3>
//                 <p class="menu-item-description">${dataArray[i].description}</p>
//                 <p class="menu-item-price">${formatPrice(dataArray[i].price)}</p>
//             </div>
//             <div class="menu-item-right"></div>
//         </div>
//     `;
// }

// // Template für Shakes-Einträge
// function getShakesTemplate(dataArray[i]) {
//     return `
//         <div class="menu-item">
//             <div class="menu-item-left">
//                 <h3 class="menu-item-name">${dataArray[i].name}</h3>
//                 <p class="menu-item-description">${dataArray[i].description}</p>
//                 <p class="menu-item-price">${formatPrice(dataArray[i].price)}</p>
//             </div>
//             <div class="menu-item-right"></div>
//         </div>
//     `;
// }