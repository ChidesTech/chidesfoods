import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function ProfilePage({ user, orders }) {
    const userInfo = useSelector(state => state.user.info)
    const router = useRouter();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [display, setDisplay] = useState("profile")
    useEffect(() => {
        if (!userInfo._id) {
            router.push("/");
            return;
        }

        setEmail(user.email);
        setUsername(user.username);

    }, []);


    async function submitHandler() {

    }

    return (
        <div>
            <div className="display-toggle">
                <div onClick={() => setDisplay("profile")} className={display === "profile" && "selected"}>Profile</div>
                <div onClick={() => setDisplay("orders")} className={display === "orders" && "selected"}>Order History</div>
            </div>
            {display === "profile" && <form action="" className="form" onSubmit={submitHandler}>
                {error && <div className="alert alert-danger">{error}</div>}
                <input type="email" value={email} className="form-control " placeholder="Enter Email" />
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="form-control " placeholder="Enter Password" />
                <label htmlFor="">Change Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control " placeholder="Enter New Password" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control " placeholder="Confirm New Password" />

                <button type="submit" className="btn-black form-control text-bold">Submit</button>

            </form>

            }

            {
                display === "orders" && 
                <div className="home-content" style={{marginTop:"1rem"}}>
    
                    <div className="sales-boxes" >
                        <div className="recent-sales box" style={{ width: "100%" }} >
                            <div className="title" >Orders</div>
                            <div className="sales-details" >
    
                             
                                 {
                    orders.length === 0 ? <div className="alert alert-info w-100">No Orders Found</div> :
                        <table style={{ width: "100%" }} className="products-table">
                            <tr> <th>Date</th> <th>Customer</th> <th>Status</th> <th>Total ( ₦ )</th> <th>Actions</th> </tr>
    
                            {orders.map(order => {
                                return <tr key={order._id}><td>{order.createdAt.substr(2, 8)}</td> <td>{order.name}</td>
                                    <td>Pending</td> <td>{order.total.toLocaleString()}</td>  <td>
                                        <button onClick={() => deleteHandler(order._id)} className="btn btn-red fa fa-trash-o"></button>
                                        <button className="btn btn-orange fa fa-eye"></button>
                                    </td></tr>
    
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
            }



        </div>

    )
}


export const getServerSideProps = async ({ params }) => {
    const { data } = await axios.get(`//users/${params.id}`)
    return {
        props: {
            user: data.user,
            orders : data.orders
        }
    }

}
