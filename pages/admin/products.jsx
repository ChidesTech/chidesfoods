import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNav from "../../components/AdminNav";
import Link from "next/link";
export default function Products({ products, cookie }) {
    const router = useRouter();
    const user = useSelector(state => state.user.info);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("")

    // useEffect(() => {
    //     if (!user || user.token !== cookie.token || !user.isAdmin) {
    //         router.push("/login")
    //     }
    // }, []);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!title || !description || !price) {
            return alert("Fill out all fields");
        };

        try {
            const { data } = await axios.post("http://localhost:3000/api/products", { title, price, description, image: "http://localhost:3000/images/dish/1.jpg" })
            if (data) {
                alert("Product Saved Successfully")
                window.location.reload();
            }

        } catch (error) {
            error.response && error.response.data.message
                ? setError(error.response.data.message)
                : setError(error.message);
        }
    }
    const deleteHandler = async (id) => {

        try {
            const { data } = await axios.delete("http://localhost:3000/api/products/" + id)
            if (data) {
                alert("Product Deleted Successfully")
                window.location.reload();
            }

        } catch (error) {
            error.response && error.response.data.message
                ? setError(error.response.data.message)
                : setError(error.message);
        }
    }

    return (
        <>
            <AdminSidebar page="products" />
            <section className="home-section">
                <AdminNav />

                <div className="home-content">

                    <div className="sales-boxes" >
                        <div className="recent-sales box" style={{ width: "100%" }} >
                            <div style={{ display: "flex", gap: ".4rem", alignItems: "center", justifyContent: "space-between" }}>
                                <div className="title" >Products </div>
                                <button onClick={() => setOpen(true)} className="btn btn-black">Add Product</button>
                            </div>
                            {message && <div className="alert alert-info">{message}</div>}


                            <div className="sales-details" >
                                {products.length === 0 ? <div style={{ width: "100%" }} className="alert alert-info">No product found</div> :

                                    <table style={{ width: "100%" }} className="products-table">
                                        <tr ><th>Date</th> <th>Image</th> <th>Title</th>  <th>Price ( ₦ )</th> <th>Count</th> <th>Actions</th></tr>
                                        {products.map(product => {
                                            return <tr key={product._id}> <td>{product.createdAt.substr(2, 8)}</td> <td><img src={product.image} alt="" /></td> <td>{product.title}</td>
                                                <td>{product.price.toLocaleString()}</td> <td>4</td>  <td>
                                                    <button onClick={() => deleteHandler(product._id)} className="btn btn-red"><i className="fa fa-trash-o"></i></button></td></tr>

                                        })}

                                    </table>

                                }


                            </div>
                            {/* <div className="button">
                                <a href="#">See All</a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>
            {open && <div className="popup-form" id="myForm">

                <form className="form" onSubmit={submitHandler}>
                    <span onClick={() => setOpen(false)} className="close-button" style={{ float: "right" }}> <i className="fa fa-times"></i> </span>
                    <h4>Add Product</h4>

                    {/* <label htmlFor="imageFile"  >
                        <button type="button" className="btn btn-black ">Choose Image</button>
                    </label> */}
                    <input type="file" id="imageFile" className="imageFile w-100" name="imageInput" />
                    <input type="text" value={image} onChange={e => setImage(e.target.value)} className="form-control" style={{ display: "none" }} placeholder="Product Image" />

                    <label className="w-100" htmlFor="">Product Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" placeholder="Product Name" />
                    <label className="w-100" htmlFor="">Product Price</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="form-control" placeholder="Product Price" />
                    <label className="w-100" htmlFor="">Product Description</label>
                    <textarea rows={2} cols={1} value={description} onChange={e => setDescription(e.target.value)} placeholder="Product Description" >

                    </textarea>
                    <div style={{ display: "flex", justifyContent: "space-around", margin: ".5rem" }}>
                        <div>
                            <input type="radio" /> Featured
                        </div>
                        <div>
                            <input type="radio" /> Not Featured
                        </div>
                    </div>
                    <button type="submit" style={{ marginTop: "5px", border: "1px solid orangered" }} className="btn btn-black w-100">Add Product</button>


                    {/* <button style={{marginTop:"5px",background:"black", border:"1px solid white"}} type="submit" className="btn btn-black w-100">Close</button> */}
                </form>
            </div>
            }


        </>
    )
}


export const getServerSideProps = async ctx => {
    const cookie = ctx.req.cookies && ctx.req.cookies;
    const { data } = await axios.get("http://localhost:3000/api/products")
    return {
        props: {
            products: data,
            cookie: cookie
        }
    }
}