import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { removeCartItem, increaseProductCount, decreaseProductCount } from '../redux/cartSlice';
import {useDispatch} from "react-redux";
import Link from 'next/link';

export default function Cart() {
    
   const cart = useSelector(state => state.cart);
   const cartItems = cart.cartItems;
   const dispatch = useDispatch();
 
   const deleteCartItemHandler =(id)=>{
    dispatch(removeCartItem(id));
   }
   const increaseHandler =(id)=>{
    dispatch(increaseProductCount(id));
   }
   const decreaseHandler =(id)=>{
    dispatch(decreaseProductCount(id));
   }
    return (<>
        <br />
        <div className="content cart">
            <div className="cart-item">
                <ul className="cart-item-container">
                    <li>
                        <h1>Cart Items</h1>
                        <h3>Price(₦)</h3>
                    </li>
                    {cartItems.length === 0 ? <div>You Have No Item In Cart.</div> :
                        cartItems.map(item =>
                            <li key={item._id} className="it">
                                <div className="cart-img">
                                    <a href={`/product/${item._id}`}>
                                        <img style={{borderRadius:"1rem"}} src={item.image} alt={item.title} />
                                    </a>
                                </div>
                                <div className="cart-name">
                                    <div className="name">
                                        <a className="cartname" href={`/product/${item._id}`}> {item.title}</a>
                                    </div>
                                    <div className="quantity">
                                        <span style={{ color: "white" }} className="selected-quantity">
                             <span className="decrement" onClick={() => decreaseHandler(item._id) }> - </span>
                                            {item.quantity}
                                            <span onClick={() => increaseHandler(item._id)} className="increment"> + </span>
                                        </span>
                                        <button onClick={() => deleteCartItemHandler(item._id)}  className="deleteBtn" >
                                            <img src="/trash-alt-solid.svg" style={{ height: "3rem", width: "2rem", marginTop: "-13px" }} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div style={{ color: "orangered" }} className="cart-price">
                                    {item.price.toLocaleString()}
                                </div>

                            </li >
                        )
                    }


                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Subtotal of <span id="item-num">{cartItems.reduce((a, c) => a + Number(c.quantity), 0)}</span>  Product(s)
                    <div id="subtotal"> ₦{(cartItems.reduce((a, c) => a + c.price * c.quantity, 0)).toLocaleString()}</div>
                </h3>
                <Link href="/checkout">
                <button

                    className="btn btn-black w-100" disabled={cartItems.length === 0}>
                    Checkout</button>
                </Link>
                

            </div>

        </div>

    </>
    )
}


