import { useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import "./Cart.scss";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // Add to cart
  const [quantity, setQuantity] = useState(1);
  const incremCount = () => {
    setQuantity(quantity + 1);
  };
  const decremCount = () => {
    quantity > 0 ? setQuantity(quantity - 1) : null;
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51ITVNVJfZKgwz1piBl1OIl6Ljcer213Gp57qw21tcHz4jx3J3upN143VynpFkfjXNrCstWn7VYtuJEQhVPivdGCY00eBRepfl4"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <div className="header-cart">
        <h1>
          Cart <span>({products.length})</span>
        </h1>
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Remove all
        </span>
      </div>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
            alt=""
          />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">${item.price}</div>
          </div>
          <div className="quantity-box">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
              className="btn-quantity"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="btn-quantity"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>TOTAL</span>
        <span className="price">${totalPrice()}</span>
      </div>
      <button onClick={handlePayment} className="btn btn-primary">
        CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
