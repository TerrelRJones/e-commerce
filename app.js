
let products = [
    {
        id: 1,
        brand:'Kajuta',
        name:'Night Lamp',
        price:49.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://d27bba62iw3ft5.cloudfront.net/spree/images/52402/medium/LUMIPI-01020170221-14047-14bsghb.jpg?1542722387',
        quantity: 1
    },
    {
        id: 2,
        brand:'Grovemade',
        name:'Pen',
        price: 24.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1MT_Uy25J0ddHaY98n4F6cDKsdZXZGYq7haRxN39wN1bG-osSIplV0qWD_t1H6nAvgbtbwk&usqp=CAc',
        quantity: 1
    },
    {
        id: 3,
        brand:'Carpio',
        name:'Ergo Mouse Wrist Rest',
        price: 39.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://m.media-amazon.com/images/I/7190-vkqLYL._AC_SS450_.jpg',
        quantity: 1
    },
    {
        id: 4,
        brand:'Rells Greenhouse',
        name:'12" Live Snake Plant in Pot',
        price: 25.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        url:'https://secure.img1-fg.wfcdn.com/im/84728836/resize-h800%5Ecompr-r85/1248/124813350/12%2522+Live+Snake+Plant+in+Pot.jpg',
        quantity: 1
    }
];


// let productNumbers = 0;
let cart = [];

// // // // Header Navigation // // // // 
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
<a href="/cart.html">
        <i id="cart-icon" class="fas fa-shopping-cart">
        <div class="cart-icon-notification" id="cart-icon-notification">0</div>
        </i>
        </a>
    </div>
</nav>`;

function addProduct(id){

    let quantityContainer = document.getElementById(id).innerHTML;
    let quantity = Number(quantityContainer);

    document.getElementById(id).innerHTML = quantity + 1;


    // totalPrice();

}

function subProduct(id){
    let quantityContainer = document.getElementById(id).innerHTML;
    let quantity = Number(quantityContainer);
    if(quantity > 1){
    document.getElementById(id).innerHTML = quantity - 1;
    }
    // totalPrice();
}

function addToCart(item, id){
    console.log(cartLS.list())
    let quantityContainer = document.getElementById(id).innerHTML;
    let quantity = Number(quantityContainer);

    cartLS.add(item, quantity);
    cart = cartLS.list();
    mapCartItems(cart);
    totalPrice();

}

function deleteProduct(item){
    // console.log(item)
    
    cartLS.remove(item);
    mapCartItems(cartLS.list());
    totalPrice();
};



function mapCartItems(cart) {
    let product = document.querySelector('.product');
    product.innerHTML = "";
    
    cart.map((item) => {
        let productDetail = document.createElement('div');
        productDetail.innerHTML = "";
        
        productDetail.innerHTML = `<div class="cart-card__item-info">
        <div class="cart-card__qty-number">${item.quantity}</div>
        <div class="cart-card__item">${item.brand}</div>
        <div class="cart-card__item">${item.name}</div>
        <div class="cart-card__price">$${item.price}</div>
        <button class="cart-card__trash-btn" onclick='deleteProduct(${item.id})'>
        <i class="icon fas fa-trash-alt"></i>
        </button>
        </div>`;
        product.appendChild(productDetail);
<<<<<<< HEAD
        cartNumbers(JSON.stringify(cart));
        

=======
>>>>>>> cart-rework
    });
    cartLS.onChange(mapCartItems);
    

};





function totalPrice() {
    let total = document.querySelector('.total');
    total.innerHTML = "";

    let totalPrice = document.createElement('div');
    let sum = cartLS.total();

    totalPrice.innerHTML = `<h3 class="total-price__numbers">${sum}</h3>`
    total.appendChild(totalPrice);
};




// // // // Display all products // // // // 
function mapProducts() {
    let container = document.querySelector('.container');
    
    products.map((item) => {
        
        let card = document.createElement('div');
        card.innerHTML = "";

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
                    <button class="counter-minus disabled" type="button" onclick='subProduct(${item.id})'><i class="minus fa fa-minus" aria-hidden="true"></i></button>
                   <div class="counter" id='${item.id}'>1</div>   
                    <button class="counter-plus" type="button" onclick='addProduct(${item.id})'><i class="plus fa fa-plus" aria-hidden="true"></i></button>
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
        <button class="add-to-cart" onclick='addToCart(${JSON.stringify(item)}, ${item.id})'><i class="add-to-cart-bag-icon"></i>Add to Cart</button>
        </div>
        </div>
        
    </div>
    </div>`

})

};


mapProducts();

// // // // Shopping Cart pop-up // // // // 
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
    <button class="order-btn"" onclick='order()'>order</button>
</div>`


