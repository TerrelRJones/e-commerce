// // // // Header Navigation // // // //
let header = document.querySelector(".header__container");
let mainNav = document.createElement("nav");

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

// Main Cart Storage
let productInCart = localStorage.getItem("__cart");
productInCart = JSON.parse(productInCart);

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
    <h3 class="sub-total__price">$35.99</h3>
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

// console.log(productInCart);

// Products in cart
function mapCart() {
  if (productInCart) {
    let productCardContainer = document.querySelector(".productCart-info");
    productCardContainer.innerHTML = "";

    productInCart.map((item) => {
      let productInfo = document.createElement("div");

      productCardContainer.appendChild(productInfo);
      productInfo.innerHTML = `<div class="cart-card__product-information">
<div class="cart-card__counter">
  <button class="counter-minus disabled" type="button">
    <i class="minus fa fa-minus" aria-hidden="true"></i>
  </button>
  <div class="cart-card__quantity">${item.quantity}</div>
  <button class="counter-plus" type="button" onclick='addProduct(${JSON.stringify(item)})'>
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
  } 
  else {
    let productCardContainer = document.querySelector(".productCart-info");
    productCardContainer.innerHTML = `<h1 class="empty-cart">Your cart is empty</h1>`;
  }
}

function addProduct(id){
    console.log(id.quantity)
}

function removeItem(id) {
  console.log(id);
}

mapCart();
