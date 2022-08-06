import axios from 'axios';
import {useRouter} from 'next/router';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { addToCart } from '../../redux/cartSlice';



export default function ProductPage({ product }) {
    const [quantity, setQuantity] = useState(1);
    const price = product.price;
    const dispatch = useDispatch();
    const router = useRouter();
    const addToCartHandler = () =>{
  dispatch(addToCart({...product, quantity}))
// ccccrouter.push(`/cart`);
} 

    return (<div className="content">

        <div className="details">
            <div className="image-details" style={{marginBottom:"1rem"}}>
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
            <div className="action-details" style={{marginTop:"1rem"}}>
                <ul>

                    <li>Availability: {product.countInStock > 0 ? <span className="success">Still In Stock </span> :
                        <span className="error">Out Of Stock</span>}
                    </li>
                    <br />
                    {
                        //  product.countInStock>0 && 
                        (
                            <>
                                <li style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <div>
                                        Quantity : <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" />
                                    </div>

                                    <button id="add-btn" onClick={addToCartHandler} className="btn btn-black ">Add To Cart</button>
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
