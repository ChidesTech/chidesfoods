import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNav from "../../components/AdminNav";
export default function Orders({ orders, cookie }) {
    const router = useRouter();
    const user = useSelector(state => state.user.info);

    // useEffect(() => {
    //     if (!user || user.token !== cookie.token || !user.isAdmin) {
    //         router.push("/login")
    //     }
    // }, []);

    const deleteHandler = async (id) => {

        try {
            const { data } = await axios.delete("http://localhost:3000/api/orders/" + id)
            if (data) {
                alert("Order Deleted Successfully")
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
            <AdminSidebar page="orders" />
            <section class="home-section">
                <AdminNav />

                <div class="home-content">

                    <div class="sales-boxes" >
                        <div class="recent-sales box" style={{ width: "100%" }} >
                            <div class="title" >Orders</div>
                            <div class="sales-details" >

                                {
                                    orders.length === 0 ? <div className="alert alert-info w-100">No Orders Found</div> :
                                        <table style={{ width: "100%" }} className="products-table">
                                            <tr> <th>Date</th> <th>Customer</th> <th>Status</th> <th>Total ( ₦ )</th> <th>Actions</th> </tr>

                                            {orders.map(order => {
                                                return <tr key={order._id}><td>{order.createdAt.substr(2, 8)}</td> <td>{order.name}</td>
                                                    <td>Delivered</td> <td>{order.total.toLocaleString()}</td>  <td>
                                                        <button onClick={() => deleteHandler(order._id)} className="btn btn-red fa fa-trash-o"></button>
                                                        <button className="btn btn-orange fa fa-eye"></button>
                                                    </td></tr>

                                            })}
                                        </table>

                                }


                            </div>
                            {/* <div class="button">
                                <a href="#">See All</a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}


export const getServerSideProps = async ctx => {
    const cookie = ctx.req.cookies && ctx.req.cookies;
    const { data } = await axios.get("http://localhost:3000/api/orders")
    return {
        props: {
            orders: data,
            cookie: cookie
        }
    }
}