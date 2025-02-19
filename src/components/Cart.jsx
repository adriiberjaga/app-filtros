import React from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useId } from "react";
import "./Cart.css";
export default function Cart() {
  const cartCheckboxId = useId();

  return (
    <div>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <strong>Iphone</strong> - 1900 $
            </div>
            <footer>
              <small>Qty: 1</small>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  );
}
