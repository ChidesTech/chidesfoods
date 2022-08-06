import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function AdminNav({  }) {
   
    const user = useSelector(state => state.user.info);

 

    return (
        <>
          <nav>
<div className="sidebar-button">
    <i className='bx bx-menu sidebarBtn'></i>
    <span className="dashboard"></span>
</div>
<div className="search-box">
    <input type="text" placeholder="Search..." />
    <i className='fa fa-search bx bx-search' ></i>
</div>
<div className="profile-details">
    <img src="/images/dp.jpg" alt="" />
    <span className="admin_name">{user && user.username}</span>
    {/* <i className='bx bx-chevron-down' ></i> */}
</div>
</nav> 

        </>
    )
}



