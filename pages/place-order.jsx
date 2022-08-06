import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function PlaceOrder() {

    const user = useSelector(state => state.user.info);
    const checkout = useSelector(state => state.checkout.info);
    const cartItems = useSelector(state => state.cart.cartItems);
    const router = useRouter();
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user) {
            router.push("/login");
        }

    }, []);

    const placeOrder = async () =>{
        try {
            const {data} = await axios.post("http://localhost:3000/api/orders", {
                name : checkout.name,
                address : checkout.address,
                number : checkout.number,
                city : checkout.city,
                state : checkout.state,
                user : user._id,
                cartItems
         });
         if(data){
            alert("Order Placed Successfully");
         }
            
        } catch (error) {
            error.response && error.response.data.message
                ? alert(error.response.data.message)
                : alert(error.message);
        }
    }

    return (
        <div className="place-order">
            <div className="left">
                <div className="left-top">
   <div className="title">Order Items</div>
   
     {cartItems.map(item =>{
       return <div key={item._id} className="item">
                        <div className="item-info">
                            <img src={item.image} alt="" />{" "}
                            <span>{item.title}</span>
                        </div>

                        <div className="item-sum">
                            {item.quantity} X {item.price} = {item.quantity * item.price}
                        </div>
                    </div>
     })}
                

                </div>
                <div className="left-bottom">
                <div className="title">Order Information</div>
                <p>
                  <strong>Name:</strong> {checkout.name} <br />
                  <strong>Mobile Number:</strong> {checkout.number} <br />
                  <strong>Address: </strong> {checkout.address},
                  {" "}{checkout.city}
                  , {" "}{checkout.state} State
                </p>
                </div>
            </div>

            <div className="right">
            <div className="title">SUMMARY</div>

            <div className="item">
                <strong>Cost Of Items</strong> <span>₦{(cartItems.reduce((a, c) => a + c.price * c.quantity, 0)).toLocaleString()}</span>
            </div>
            <div className="item">
                <strong>Delivery Cost</strong> <span>₦50000</span>
            </div>
            <div className="item">
                <strong>Tax  </strong> <span>₦50000</span>
            </div>
            <div className="item">
                <strong>Total </strong> <span>₦50000</span>
            </div>
                <button onClick={placeOrder} className="btn btn-black w-100">Place Order</button>
            </div>
        </div>
    )
}