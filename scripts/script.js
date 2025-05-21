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
}

// Hilfsfunktion zur Formatierung der Preise (z.B. 9.40 -> 9,40 €)
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
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