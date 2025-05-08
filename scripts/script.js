function renderAll() {

    let menuSandwiches = document.getElementById('content-sandwiches');
    menuSandwiches.innerHTML = "";

    for (let i = 0; i < dishesSandwiches.length; i++) {
        menuSandwiches.innerHTML += getSandwichTemplate(i);
    }

    // renderSandwiches();
    // renderSweets();
    // renderCoffee();
    // renderShakes();
}

function getSandwichTemplate() {
    return `
    
    `
}