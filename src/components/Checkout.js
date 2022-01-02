import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {/* <img className="checkout_ad"
src="" alt="" /> */}
        <div>
          <h2 className="checkout_title">Your Amazon Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              className="checkout_prduct"
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <h1>Subtotal Here</h1>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
