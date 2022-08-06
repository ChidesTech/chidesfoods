import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNav from "../../components/AdminNav";
export default function Categories({ products, cookie }) {
    const router = useRouter();
    const user = useSelector(state => state.user.info);

    useEffect(() => {
        if (!user || user.token !== cookie.token || !user.isAdmin) {
            router.push("/login")
        }
    }, [])

    return (
        <>
           <AdminSidebar page="categories"/>
            <section className="home-section">
               <AdminNav/>
                <div className="home-content">

                    <div className="sales-boxes" >
                        <div className="recent-sales box" style={{ width: "100%" }} >
                            <div className="title" style={{ textAlign: "center" }}>Categories</div>
                            <div className="sales-details" >

                                <table style={{ width: "100%" }}>
                                    <tr><th>Date</th> <th>Customer</th> <th>Status</th> <th>Total ( ₦ )</th></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Delivered</td> <td>45,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Unpaid</td> <td>3,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Paid</td> <td>3,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Unpaid</td> <td>3,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Unpaid</td> <td>3,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Unpaid</td> <td>3,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Unpaid</td> <td>3,000</td></tr>
                                    <tr><td>02-21</td> <td>Desmond Nwosu</td> <td>Unpaid</td> <td>3,000</td></tr>
                                </table>
                            </div>
                            {/* <div className="button">
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
    const { data } = await axios.get("http://localhost:3000/api/products")
    return {
        props: {
            products: data,
            cookie: cookie
        }
    }
}