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
<div class="sidebar-button">
    <i class='bx bx-menu sidebarBtn'></i>
    <span class="dashboard"></span>
</div>
<div class="search-box">
    <input type="text" placeholder="Search..." />
    <i class='fa fa-search bx bx-search' ></i>
</div>
<div class="profile-details">
    <img src="/images/dp.jpg" alt="" />
    <span class="admin_name">{user && user.username}</span>
    {/* <i class='bx bx-chevron-down' ></i> */}
</div>
</nav> 

        </>
    )
}



