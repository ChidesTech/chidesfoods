import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function Products({ cookie, page }) {
   

    return (
        <>
            <div style={{ marginTop: "-1rem" }} className="sidebar">
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus'></i>
                    <span style={{textTransform : "capitalize"}} className="logo_name">{page && page}</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link href="/">
                            <a  >
                                <i className='fas fa-home' ></i>
                                <span className="links_name">Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin">
                            <a  className={`${page === "dashboard" && "active"}`}>
                                <i className='far fa-calendar-alt' ></i>
                                <span className="links_name">Dashboard</span>
                            </a>
                        </Link>
                    </li>
                   

                    <li>
                    <Link href="/admin/users">
                        <a className={`${page === "users" && "active"}`}>
                            <i className=' fa fa-users' ></i>
                            <span className="links_name">Users</span>
                        </a>
                        </Link>

                    </li>
                    <li>
                    <Link href="/admin/categories">
                        <a className={`${page === "categories" && "active"}`}>
                            <i className=' fa fa-list' ></i>
                            <span className="links_name">Categories</span>
                        </a>
                        </Link>

                    </li>
                    <li>
                        <Link href="/admin/products">
                            <a className={`${page === "products" && "active"}`}>
                                <i className='fas fa-shopping-cart' ></i>
                                <span className="links_name">Products</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href="/admin/orders">
                        <a className={`${page === "orders" && "active"}`}>
                            <i className='fa fa-clipboard' ></i>
                            <span className="links_name">Orders</span>
                        </a>
                        </Link>

                    </li>
                   
                    <li>
                        <a href="#">
                            <i className='fa fa-paper-plane' ></i>
                            <span className="links_name">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='fa fa-heart' ></i>
                            <span className="links_name">Favourites</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className='fa fa-cog' ></i>
                            <span className="links_name">Setting</span>
                        </a>
                    </li>
                    
                </ul>
            </div>

        </>
    )
}


// export const getServerSideProps = async ctx => {
//     const cookie = ctx.req.cookies && ctx.req.cookies;
//     const { data } = await axios.get("http://localhost:3000/api/products")
//     return {
//         props: {
//             products: data,
//             cookie: cookie
//         }
//     }
// }