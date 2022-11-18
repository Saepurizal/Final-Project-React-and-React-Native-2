import "./css/cart.css"
// import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { removeFromCart } from "../features/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();



    // const [Total, setTotal] = useState("");

    const cartItems = useSelector((state) => state.cart.cartItems);
    
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

  return (
    <>
    <br />
    <div className="container">
      <div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted"> items</div>
                        </div>
                    </div>
                    {cartItems.map((cart, index) => (
                        <div className="row border-top border-bottom" key={index}>
                            <CartItem
                            idp={cart?.id}
                            price={cart?.price}
                            category={cart?.category}
                            urlToImage={cart?.image}
                            title={cart?.title}
                            description={cart?.description}
                            onClick={() => {
                                handleRemoveFromCart(cart);
                            }}
                            buttonName={"X"
                            }
                            />
                            </div>
                    ))}    
                    <div className="back-to-shop"><a href="#">&leftarrow;</a><span className="text-muted">Back to shop</span></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" >ITEMS 3</div>
                        <div className="col text-right">&euro; 132.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row">
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn btn-dark">CHECKOUT</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
  );
}

export default Cart;
