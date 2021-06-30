let products = [
  {
    id: 1,
    brand: "Kajuta",
    name: "Night Lamp",
    price: 49.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://d27bba62iw3ft5.cloudfront.net/spree/images/52402/medium/LUMIPI-01020170221-14047-14bsghb.jpg?1542722387",
    quantity: 1,
  },
  {
    id: 2,
    brand: "Grovemade",
    name: "Pen",
    price: 24.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE1MT_Uy25J0ddHaY98n4F6cDKsdZXZGYq7haRxN39wN1bG-osSIplV0qWD_t1H6nAvgbtbwk&usqp=CAc",
    quantity: 1,
  },
  {
    id: 3,
    brand: "Carpio",
    name: "Ergo Mouse Wrist Rest",
    price: 39.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://m.media-amazon.com/images/I/7190-vkqLYL._AC_SS450_.jpg",
    quantity: 1,
  },
  {
    id: 4,
    brand: "Rells Greenhouse",
    name: '12" Live Snake Plant in Pot',
    price: 25.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, libero!  Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "https://secure.img1-fg.wfcdn.com/im/84728836/resize-h800%5Ecompr-r85/1248/124813350/12%2522+Live+Snake+Plant+in+Pot.jpg",
    quantity: 1,
  },
];

//main cart
let cart = [];
let notification = [];

// // // // Header Navigation // // // //
let header = document.querySelector(".header__container");
let mainNav = document.createElement("nav");

header.appendChild(mainNav);
mainNav.innerHTML = `<nav class="main-nav">
<div class="main-nav__logo">
<a href="/" class="logo-btn">
PRIME.
</a>
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
<a class="main-nav__link" href="./cart.html">ACCOUNT</a>
</li> 
</div>
<div class="main-nav__cart-icon">
<a href="./cart.html">
<i id="cart-icon" class="fas fa-shopping-cart">
<div class="cart-icon-notification" id="cart-icon-notification">0</div>
</i>
</a>
</div>
<div class="hamburger" onclick="hamburgerMenu()">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>
</nav>
</div>`;

//MOBILE MENU TOGGLE
let mobileMenu = document.querySelector('.main-nav__links');

function hamburgerMenu(){
  mobileMenu.classList.toggle('.main-nav__links--active');
}


// PRODUCT PAGE FUNCTIONS
function addProduct(id) {
  let quantityContainer = document.getElementById(id).innerHTML;
  let quantity = Number(quantityContainer);

  document.getElementById(id).innerHTML = quantity + 1;
}

function subProduct(id) {
  let quantityContainer = document.getElementById(id).innerHTML;
  let quantity = Number(quantityContainer);
  if (quantity > 1) {
    document.getElementById(id).innerHTML = quantity - 1;
  }
}

function addToCart(item, id) {
  console.log(cartLS.list());
  let quantityContainer = document.getElementById(id).innerHTML;
  let quantity = Number(quantityContainer);

  cartLS.add(item, quantity);
  cart = cartLS.list();
  mapCartItems(cart);
  totalPrice();
  showCartNotification();
}

function deleteProduct(item) {
  cartLS.remove(item);
  mapCartItems(cartLS.list());
  totalPrice();
  showCartNotification();
}

function mapCartItems(cart) {
  let product = document.querySelector(".product");
  product.innerHTML = "";

  cart.map((item) => {
    let productDetail = document.createElement("div");
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
  });
  cartLS.onChange(mapCartItems);
}

function totalPrice() {
  let total = document.querySelector(".total");
  total.innerHTML = "";

  let totalPrice = document.createElement("div");
  let sum = cartLS.total();

  totalPrice.innerHTML = `<h3 class="total-price__numbers">${Math.round(sum*100)/100}</h3>`;
  total.appendChild(totalPrice);
}

function mainPage() {
  // // // // Display all products // // // //
  function mapProducts() {
    let container = document.querySelector(".container");

    products.map((item) => {
      let card = document.createElement("div");
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
                              <button class="counter-minus disabled" type="button" onclick='subProduct(${
                                item.id
                              })'><i class="minus fa fa-minus" aria-hidden="true"></i></button>
                             <div class="counter" id='${item.id}'>1</div>   
                              <button class="counter-plus" type="button" onclick='addProduct(${
                                item.id
                              })'><i class="plus fa fa-plus" aria-hidden="true"></i></button>
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
                  <button class="add-to-cart" onclick='addToCart(${JSON.stringify(
                    item
                  )}, ${
        item.id
      })'><i class="add-to-cart-bag-icon"></i>Add to Cart</button>
                  </div>
                  </div>
              </div>
              </div>`;
    });
  }

  mapProducts();

  // // // // Shopping Cart pop-up // // // //
  let bottom = document.querySelector(".bottom__container");
  let shoppingCart = document.createElement("div");

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
          </div>`;
}

function getCartItems() {
  let productInCart = localStorage.getItem("__cart");
  return JSON.parse(productInCart);
};

function showCartNotification(){

  let productInCart = localStorage.getItem("__cart");
  let result = JSON.parse(productInCart).map(a => a.quantity);
  const cartNumber = result.reduce(function(a, b){return a+b;})
  
  let iconNotification = document.querySelector('.cart-icon-notification');
  iconNotification.innerHTML = cartNumber;
  
  // let iconNotification = document.querySelector('.ham-burg-notification');
  // iconNotification.innerHTML = cartNumber;
  }




//// CART PAGE FUNCTIONS
function addProductCart(item, id) {
  let quantityContainer = document.getElementById(id).innerHTML;
  let quantity = Number(quantityContainer);

  document.getElementById(id).innerHTML = quantity + 1;
  cartLS.add(item);
  totalPriceCart();
  showCartNotification();

}

function subProductCart(item, id) {
  let quantityContainer = document.getElementById(id).innerHTML;
  let quantity = Number(quantityContainer);
  if (quantity > 1) {
    document.getElementById(id).innerHTML = quantity - 1;

  }
  
  cartLS.add(item, -1);
  totalPriceCart();
  showCartNotification();
}

function removeItem(item) {
  cartLS.remove(item);
  mapCart();
  totalPriceCart();
  getCartItems();
  showCartNotification();
}

function mapCart() {
  if (getCartItems()) {
    let productCardContainer = document.querySelector(".productCart-info");
    productCardContainer.innerHTML = "";

    getCartItems().map((item) => {
      let productInfo = document.createElement("div");
      productInfo.innerHTML = "";

      productCardContainer.appendChild(productInfo);
      productInfo.innerHTML = `<div class="cart-card__product-information">
<div class="cart-card__counter">
<button class="counter-minus" type="button" onclick='subProductCart(${JSON.stringify(
 item
)},${item.id})'>
 <i class="minus fa fa-minus" aria-hidden="true"></i>
</button>
<div class="cart-card__quantity" id="${item.id}">${item.quantity}</div>
<button class="counter-plus" type="button" onclick='addProductCart(${JSON.stringify(
 item
)},${item.id})'>
 <i class="minus fa fa-plus" aria-hidden="true"></i>
</button>
</div>
<div class="cart-card__item">${item.brand} ${item.name}</div>
<div class="cart-card__price">$${item.price}</div>
<button class="cart-card__trash-btn" onclick='removeItem(${item.id})'>
<i class="icon fas fa-trash-alt"></i>
</button>
</div>`;
      productCardContainer.appendChild(productInfo);
    });
  } else {
    let productCardContainer = document.querySelector(".productCart-info");
    productCardContainer.innerHTML = `<h1 class="empty-cart">Your cart is empty</h1>`;
  }
};

function totalPriceCart() {
  let total = document.querySelector(".sub-total__price");
  total.innerHTML = "";

  let sum = cartLS.total();
  total.innerHTML = `$${Math.round(sum*100)/100}`;
}

function cartPage() {
  getCartItems();

  // Cart Page Card
  let cartCardContainer = document.querySelector(".container__cart-page");
  let cartCard = document.createElement("div");

  cartCardContainer.appendChild(cartCard);
  cartCard.innerHTML = ` <div class="cart-card">
<div class="cart-card__left-info">
 <div class="product-container">
   <h1 class="qty">QTY</h1>
   <h1 class="product">item</h1>
   <h1 class="price">PRICE</h1>
 </div>
 <div class="productCart-info"></div>
</div>
<div class="cart-card__right-info">
 <h1 class="cart-card__total-title">TOTAL</h1>
 <div class="cart-card__sub-total">
   <h2 class="sub-total">Sub-Total</h2>
   <h3 class="sub-total__price"></h3>
 </div>
 <div class="cart-card__shipping">
   <h2 class="shipping">Shipping</h2>
   <h3 class="shipping-eta">TBD</h3>
 </div>
 <div class="cart-card__discount-code">
   <input type="text" class="discount-code__input" placeholder="Please eneter here">
   <button class="discount-code-btn"> Apply discount</button>
 </div>
 <div class="divider"></div>
 <button class="checkout-btn">Checkout</button>

 <h1 class="we-accept">We accept:</h1>
 <div class="payment-options">
   <span
     class="dc_payment_icons_flat_32 dc_visa_flat"
     title="Visa Electron"
   ></span>
   <span
     class="dc_payment_icons_flat_32 dc_mastercard_flat"
     title="MasterCard"
   ></span>
   <span
     class="dc_payment_icons_flat_32 dc_american_express_flat"
     title="American Express"
   ></span>
   <span
     class="dc_payment_icons_flat_32 dc_paypal_flat"
     title="PayPal"
   ></span>
   <span
     class="dc_payment_icons_flat_32 dc_discover_flat"
     title="Discover"
   ></span>
   <span
     class="dc_payment_icons_flat_32 dc_maestro_flat"
     title="Maestro"
   ></span>
 </div>
</div>
</div> `;

  console.log(getCartItems());

  // Products in cart on Cart Page
  mapCart();
}


///////// PAGES ID///////////////
let page = document.body.id;
//////SWITCH FOR PAGES////////
switch (page) {
  case "products":
    mainPage();
    break;
    case "cart":
      getCartItems();
      cartPage();
    break;
};

showCartNotification();