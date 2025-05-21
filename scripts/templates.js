function getMenuTemplate(dish) {
    return `
        <div class="menu-item">
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