import React from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css";
import { useCart } from "../hooks/useCart";
export default function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart} = useCart();
  function CartItem( {thumbnail, title, price, quantity, addToCart}){
    return(
      <li>
            <img src={thumbnail} alt={thumbnail} />
            <div>
              <strong>{title}</strong> - {price}$
            </div>
            <footer>
              <small>Qty: {quantity}</small>
              <button onClick={addToCart}>+</button>
              <small>Total: {quantity * price}$</small>
            </footer>
          </li>
    )
  }
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem key={product.id}
              addToCart={() => addToCart(product)}
              {...product} />
          ))}
        </ul>
        <span>Total: {totalPrice}$</span>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  );
}
