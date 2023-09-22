import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utility/money.js";
let carthtml='';

cart.forEach((cartItem)=>{
  
let matchItem;
  products.forEach((product)=>{
    if (cartItem.productId === product.id)
      matchItem = product;
  })

   carthtml += `          <div class="cart-item-container js-cart-item-container-${matchItem.id} ">
  <div class="delivery-date">
    Delivery date: Tuesday, June 21
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image"
      src="${matchItem.image}">

    <div class="cart-item-details">
      <div class="product-name">
        ${matchItem.name}
      </div>
      <div class="product-price">
      $${formatCurrency(matchItem.priceCents)}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary " data-product-id = "${matchItem.id}">
          Delete
        </span>
      </div>
    </div>

    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      <div class="delivery-option">
        <input type="radio" checked
          class="delivery-option-input"
          name="delivery-option-${matchItem.id}">
        <div>
          <div class="delivery-option-date">
            Tuesday, June 21
          </div>
          <div class="delivery-option-price">
            FREE Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchItem.id}">
        <div>
          <div class="delivery-option-date">
            Wednesday, June 15
          </div>
          <div class="delivery-option-price">
            $4.99 - Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchItem.id}">
        <div>
          <div class="delivery-option-date">
            Monday, June 13
          </div>
          <div class="delivery-option-price">
            $9.99 - Shipping
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

//document.querySelector('.js-cart-item-container').innerHTML=item

})
document.querySelector('.order-summary').innerHTML=carthtml


document.querySelectorAll('.delete-quantity-link').forEach((deleteButton)=>{
  deleteButton.addEventListener('click',()=>{
    const productId = deleteButton.dataset.productId;
    removeFromCart(productId);
    
     document.querySelector(`.js-cart-item-container-${productId}`).remove()
  })
})
