import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar"
import AdminNav from "../../components/AdminNav"
export default function AdminDashboard({ products, cookie }) {
    const router = useRouter();
    const user = useSelector(state => state.user.info);

    // useEffect(() => {
    //     if (!user || user.token !== cookie.token || !user.isAdmin) {
    //         router.push("/login")
    //     }
    // }, [])

    return (
        <>
           <AdminSidebar page="dashboard"/>
            <section class="home-section">        
           <AdminNav/>
                <div class="home-content">
                    <div class="overview-boxes">
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Order</div>
                                <div class="number">40,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt fa fa-clipboard'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            {/* <i class='bx bx-cart-alt fa fa-list cart'></i> */}
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Sales</div>
                                <div class="number">38,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt fa fa-credit-card'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            {/* <i class='bx bxs-cart-add fa fa-shopping-cart cart two' ></i> */}
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Profit</div>
                                <div class="number">12,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt fa fa-money-bill'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            {/* <i class='bx bx-cart cart three' ></i> */}
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Return</div>
                                <div class="number">11,086</div>
                                <div class="indicator">
                                    <i class='bx bx-down-arrow-alt down fa fa-money-bill'></i>
                                    <span class="text">Down From Today</span>
                                </div>
                            </div>
                            {/* <i class='bx bxs-cart-download cart four' ></i> */}
                        </div>
                    </div>

                    <div class="sales-boxes">
                        <div class="recent-sales box">
                            <div class="title">Recent Orders</div>
                            <div class="sales-details">
                               
                                <table style={{width :"100%"}}>
                         <tr><th>Date</th> <th>Customer</th> <th>Status</th> <th>Total ( ₦ )</th></tr>
                         <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Delivered</td> <td>45,000</td></tr>
                         <tr><td>02-21</td> <td>Yeshua</td> <td>Unpaid</td> <td>3,000</td></tr>
                         <tr><td>02-21</td> <td>Travesty</td> <td>Paid</td> <td>3,000</td></tr>
                         <tr><td>02-21</td> <td>Michael</td> <td>Unpaid</td> <td>3,000</td></tr>
                         <tr><td>02-21</td> <td>Rowland</td> <td>Unpaid</td> <td>3,000</td></tr>
                         <tr><td>02-21</td> <td>Uncle Ricky</td> <td>Unpaid</td> <td>3,000</td></tr>
                         <tr><td>02-21</td> <td>Monty Fisher</td> <td>Unpaid</td> <td>3,000</td></tr>
                         <tr><td>02-21</td> <td>Callum Scott</td> <td>Unpaid</td> <td>3,000</td></tr>
                                </table>
                            </div>
                            {/* <div class="button">
                                <a href="#">See All</a>
                            </div> */}
                        </div>
                        <div class="top-sales box">
                            <div class="title">Top Seling Product</div>
                            <ul class="top-sales-details">
                                {products.map(product =>{
                                    return  <li key={product._id}>
                                    <a href="#">
                                        <img src={product.image} alt="" />
                                        <span class="product">{product.title}</span>
                                    </a>
                                    <span class="price">₦ {product.price}</span>
                                </li>
                                })}
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

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