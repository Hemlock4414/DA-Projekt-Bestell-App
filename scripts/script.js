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

function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + ' €';
}

function addToBasket(category, dishIndex) {
    let dish = dishesData[category][dishIndex];
    let existingItemIndex = basket.findIndex(item => 
        item.name === dish.name && item.category === category
    );
    if (existingItemIndex !== -1) {
        basket[existingItemIndex].quantity++;
    } else {
        basket.push({
            name: dish.name,
            price: dish.price,
            quantity: 1,
            category: category
        });
    }    
    renderBasket();
    updateMobileOverlay();
}

function renderBasket() {
    let basketRef = document.getElementById('basket-wrapper');
    
    let subtotal = calculateSubtotal();
    let deliveryCost = 5.00;
    let total = subtotal + deliveryCost;

    basketRef.innerHTML = getBasketTemplate(subtotal, deliveryCost, total);
    
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

function createMobileOverlay() {

    if (document.getElementById('mobile-basket-overlay')) {
        return;
    }
    
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
        
        if (overlay.classList.contains('active')) {
            document.body.classList.add('no-scroll');
            updateMobileOverlay();
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

function placeOrder() {
    if (basket.length === 0) return;
    basket = [];
    
    const confirmationHTML = getOrderConfirmationMessage();
    const basketWrapper = document.getElementById('basket-wrapper');
    const mobileOverlay = document.getElementById('mobile-basket-overlay');

    if (basketWrapper) {
        basketWrapper.innerHTML = confirmationHTML;
    }
    if (mobileOverlay && mobileOverlay.classList.contains('active')) {
        mobileOverlay.innerHTML = confirmationHTML;
    }
    setTimeout(() => {
        renderBasket();
        updateMobileOverlay();
    }, 3000);
}