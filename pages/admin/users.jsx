import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNav from "../../components/AdminNav";
import Link from "next/link";
export default function Users({ users, cookie }) {
    const router = useRouter();
    const user = useSelector(state => state.user.info);
   
    const [message , setMessage] = useState("")

    useEffect(() => {
        if (!user || user.token !== cookie.token || !user.isAdmin) {
            router.push("/login")
        }
    }, []);

  
    return (
        <>
            <AdminSidebar page="users" />
            <section className="home-section">
                <AdminNav />

                <div className="home-content">

                    <div className="sales-boxes" >
                        <div className="recent-sales box" style={{ width: "100%" }} >
                            <div style={{ display: "flex", gap: ".4rem", alignItems: "center", justifyContent: "space-between" }}>
                                <div className="title" >Users </div>
                                <button onClick={() => setOpen(true)} className="btn-black">Add User</button>
                            </div>
                           {message && <div className="alert alert-info">{message}</div> } 


                            <div className="sales-details" >
                                {users.length === 0 ? <div style={{width:"100%"}} className="alert alert-info">No user found</div> :
                                
                                <table style={{ width: "100%" }} className="products-table">
                                    <tr ><th>Date</th> <th>Email</th> <th>Username</th>  <th>Type</th>  <th>Actions</th></tr>
                                    {users.map(user => {
                                        return <tr key={user._id}> <td>{user.createdAt.substr(2,8)}</td> 
                                        <td>{user.email}</td> 
                                          <td>{user.username}</td> <td>{user.isAdmin ? "Admin" : "Customer"}</td>  <td>
                                            <button  className="btn btn-red"><i className="fa fa-trash-o"></i></button></td></tr>

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
           
        </>
    )
}


export const getServerSideProps = async ctx => {
    const cookie = ctx.req.cookies && ctx.req.cookies;
    const { data } = await axios.get("//users")
    return {
        props: {
            users: data,
            cookie: cookie
        }
    }
}