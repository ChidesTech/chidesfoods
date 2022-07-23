import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ProductPage({ product }) {


    return (<div className="content">

        <div className="details">
            <div className="image-details">

                <img src={product.image} alt={product.name} />
            </div>
            <div className="info-details">
                <ul>
                    <li><h1>{product.title}</h1></li>
                    <li> rating</li>
                    <li><h2><strong>₦{product.price.toLocaleString()}</strong></h2></li>
                    <li><strong>Details</strong><div>{product.description}</div></li>
                </ul>
            </div>
            <div className="action-details">
                <ul>

                    <li>Availability: {product.countInStock > 0 ? <span className="success">Still In Stock </span> :
                        <span className="error">Out Of Stock</span>}
                    </li>
                    {
                        //  product.countInStock>0 && 
                        (
                            <>
                                {/* <li className="quantity">
                                    Quantity: <span>
                                        <select className="quantity selected-quantity" value={qty} onChange={event => setQty(event.target.value)}>
                                            {
                                                [...Array(100).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))
                                            }
                                        </select>
                                    </span>
                                </li> */}
                                <li style={{ display: "flex", gap: "4rem", marginTop: "3rem", marginBottom: "-2.5rem" }}>
                                    {/* <li><Link id="add-btn" to={`/wishlist/${prodId}`} className="btn">Save Item</Link></li> */}
                                    <li><button id="add-btn"  className="btn btn-black">Add To Cart</button></li>
                                </li>
                            </>

                        )}
                </ul>
            </div>
        </div>
    </div>
    )
}


export const getServerSideProps = async ({ params }) => {
    const { data } = await axios.get(`http://localhost:3000/api/products/${params.id}`)
    return {
        props: {
            product: data
        }
    }

}
