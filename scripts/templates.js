// Template für Sandwich-Einträge
function getSandwichTemplate(i) {
    return `
        <div class="menu-item">
            <div class="menu-item-left">
                <h3 class="menu-item-name">${dishesSandwiches[i].name}</h3>
                <p class="menu-item-description">${dishesSandwiches[i].description}</p>
                <p class="menu-item-price">${formatPrice(dishesSandwiches[i].price)}</p>
            </div>
            <div class="menu-item-right"></div>
        </div>
    `;
}

// Template für Süßspeisen-Einträge
function getSweetsTemplate(i) {
    return `
        <div class="menu-item">
            <div class="menu-item-left">
                <h3 class="menu-item-name">${dishesSweets[i].name}</h3>            
                <p class="menu-item-description">${dishesSweets[i].description}</p>
                <p class="menu-item-price">${formatPrice(dishesSweets[i].price)}</p>
            </div>
            <div class="menu-item-right"></div>
        </div>
    `;
}

// Template für Kaffee-Einträge
function getCoffeeTemplate(i) {
    return `
        <div class="menu-item">
            <div class="menu-item-left">
                <h3 class="menu-item-name">${dishesCoffee[i].name}</h3>
                <p class="menu-item-description">${dishesCoffee[i].description}</p>
                <p class="menu-item-price">${formatPrice(dishesCoffee[i].price)}</p>
            </div>
            <div class="menu-item-right"></div>
        </div>
    `;
}

// Template für Shakes-Einträge
function getShakesTemplate(i) {
    return `
        <div class="menu-item">
            <div class="menu-item-left">
                <h3 class="menu-item-name">${dishesShakes[i].name}</h3>
                <p class="menu-item-description">${dishesShakes[i].description}</p>
                <p class="menu-item-price">${formatPrice(dishesShakes[i].price)}</p>
            </div>
            <div class="menu-item-right"></div>
        </div>
    `;
}