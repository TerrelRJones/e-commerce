
let products = [
    {
        brand:'Kajuta',
        name:'Night Lamp',
        price:49.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://d27bba62iw3ft5.cloudfront.net/spree/images/52402/medium/LUMIPI-01020170221-14047-14bsghb.jpg?1542722387'
    },
    {
        brand:'Grovemade',
        name:'Pen',
        price: 24.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1MT_Uy25J0ddHaY98n4F6cDKsdZXZGYq7haRxN39wN1bG-osSIplV0qWD_t1H6nAvgbtbwk&usqp=CAc',
    },
    {
        brand:'Carpio',
        name:'Ergo Mouse Wrist Rest',
        price: 39.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://m.media-amazon.com/images/I/7190-vkqLYL._AC_SS450_.jpg'
    },
    {
        brand:'Rells Greenhouse',
        name:'12inch Live Snake Plant in Pot',
        price: 25.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://secure.img1-fg.wfcdn.com/im/84728836/resize-h800%5Ecompr-r85/1248/124813350/12%2522+Live+Snake+Plant+in+Pot.jpg'
    }
];


let itemTotal = 0;
let cart = [];

//Header Navigation
let header = document.querySelector('.header__container');
let mainNav = document.createElement('nav');

header.appendChild(mainNav);
mainNav.innerHTML = `<nav class="main-nav">
<div class="main-nav__logo">
    PRIME.
</div>
<div class="main-nav__links">
    <ul class="main-nav__link-ul">
        <li>
            <a class="main-nav__link--active" href="/">SHOP</a>
        </li>
        <li>
            <a class="main-nav__link" href="/">PRODUCTS</a>
        </li> 
        <li>
            <a class="main-nav__link" href="/">SALE</a>
        </li> 
        <li>
            <a class="main-nav__link" href="/">ACCOUNT</a>
        </li> 
</div>
    <div class="main-nav__cart-icon">
        <i id="cart-icon" class="fas fa-shopping-cart">
        </i>
    </div>
</nav>`;


let quantity = 1;

// Remove item from cart
function deleteFromCart(item){
    
    cart = cart.filter((product) => JSON.stringify(item) !== JSON.stringify(product));
    
    console.log(cart); 
    mapCartItems();
    totalPrice();
    itemNotification();
};


function mapCartItems() {
    let product = document.querySelector('.product');
    product.innerHTML = "";
    
    cart.map((item) => {
        let productDetail = document.createElement('div');
    
        productDetail.innerHTML = `<div class="cart-card__item-info">
        <div class="cart-card__qty-number">2</div>
        <div class="cart-card__item">${item.brand}</div>
        <div class="cart-card__item">${item.name}</div>
        <div class="cart-card__price">$${item.price}</div>
        <button class="cart-card__trash-btn" onclick='deleteFromCart(${JSON.stringify(item)})'>
        <i class="icon fas fa-trash-alt"></i>
        </button>
        </div>`;
        product.appendChild(productDetail);
    });
    
};

function addToCart(item){
    
    cart.push(item);
    mapCartItems();
    totalPrice();
    itemNotification();
    
    console.log(cart);  
};

function totalPrice() {
    let total = document.querySelector('.total');
    total.innerHTML = "";

    let totalPrice = document.createElement('div');
    
    let sum = cart.reduce((cartTotal, item) => {
        return item.price + cartTotal;
    }, 0)
  
    totalPrice.innerHTML = `<h3 class="total-price__numbers">${sum}</h3>`
    total.appendChild(totalPrice);
};

function itemNotification() {
    itemTotal = cart.length;
    
    let notification = document.getElementById('cart-icon');
    // notification.innerHTML = "";

    let number = document.createElement('div');
    notification.appendChild(number);
    number.innerHTML = `<div class="cart-icon-notification">
    ${itemTotal}</div>`;

    notification.appendChild(number);

}



// Display all products
function mapProducts() {
products.map((item) => {
    
    let container = document.querySelector('.container');
    let card = document.createElement('div');

    container.appendChild(card);
    card.innerHTML = `        <div class="card__container">
    <div class="card__image-container">
        <img class='card__image' src="${item.url}" alt="">
    </div>
    <div class="card__right-info">
        <div class='card__product-status-bg'>
        <h3 class="card__product-status">new</h3>
    </div>
    <h1 class="card__product-title">${item.brand}</h1>
    <h3 class="card__product-name">${item.name}</h3>
    <div class="card__price-quantity">
        <div class="card__price-container">
            <div class="card__price">price</div>
            <div class="card__price-number">$${item.price}</div>
        </div>
        <div class="card__quantity-container">
            <div class="card__quantity">Quantity</div>
            <div class="card__quantity-counter">
                <div class="card__counter">
                    <div class="counter-minus"><i class="minus fa fa-minus" aria-hidden="true"></i></div>
                    <div class="counter-number">${quantity}</div>
                    <div class="counter-plus"><i class="plus fa fa-plus" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    </div>
        <h3 class="card_description">Description</h3>
        <div class="card__description-underline"></div>
        <div class='card__product-description-container'>
        <p class="card__product-description">${item.description}</p>
        </div>
        <div class="card__btnBottom">
        <button class="add-to-cart" onclick='addToCart(${JSON.stringify(item)})'><i class="add-to-cart-bag-icon"></i>Add to Cart</button>
        </div>
        </div>
        
    </div>
</div>`
})
};



mapProducts();

// Shopping Cart pop-up
let bottom = document.querySelector('.bottom__container');
let shoppingCart = document.createElement('div');

bottom.appendChild(shoppingCart);
shoppingCart.innerHTML = `<div class="cart-card__title">
<h4 class="cart-card__message">
    You've got some things.
</h4>
</div>
<div class="cart-description">
<div class="cart-descripion__close-btn">
    <i class="fas fa-times"></i>
</div>
<div class="cart-description__qty">
    <h3 class='qty'>
        QTY
    </h3>
</div>
<div class="cart-description__item">
    <h3 class='item'>
        item
    </h3>
</div>
<div class="cart-description__price">
    <h3 class='price'>
        price
    </h3>
</div>
</div>
<div class="product"></div>
<div class="cart-card__bottom">
<div class="cart-card__total-price">
    <h3 class="total-price">Total:</h3>
    <div class="total"></div>
</div>
<button class="order-btn"">order</button>
</div>`


