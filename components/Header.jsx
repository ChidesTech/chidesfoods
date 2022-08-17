import Image from "next/image";
import styles from "../styles/header.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
    const user = useSelector(state => state.user.info);
   const quantity = useSelector(state => state.cart.cartItems.length)
    return <>
        <div className={styles.container}>
            <div className={styles.headerItem}>
                <Link href="/" className={styles.reservationBtn}>
                    <div className={styles.brand} >  <i className="glyph-icon flaticon-plate7"></i> CHIDES FOODS  </div>
                </Link>
            </div>
            <div className={styles.headerItem}>
                <ul className={styles.list}>
                    <li className={styles.listItem}><i className="fa fa-home"></i> Home</li>
                    <div>
                        <input className={styles.searchInput} type="text" />
                        <button className={styles.searchButton}><i className="fa fa-search"></i></button>
                    </div>

     {!user._id &&  <Link href="/login">
     <li className={styles.listItem}> Login 
     </li>
     </Link>}
     {user._id &&  <Link href={`/user/${user._id}`}>
     <li  className={styles.listItem}> <span style={{background:"black", color:"orangered", padding:"2px 9px", borderRadius:"14px", textTransform :"capitalize"}}>
        <i className="fa fa-user"></i> {user && user.username.substr(0,1)} <i className="fa fa-caret-right"></i></span> 
     </li>
     </Link>}
   {user._id && user.isAdmin &&  <Link href="/admin">
     <li className={styles.listItem}> Dashboard 
     </li>
     </Link>}

    



                </ul> 
            </div>
            <div className={styles.headerItem}>
                <Link href={{ pathname: "/cart" }} replace>
                    <a>
                        <div className={styles.cart}>

                            <div className={styles.cartIcon}>
                                <i style={{color: "black"}} className="fa fa-shopping-cart shopping-cart"></i>

                            </div>
                            <div style={{color: "black"}} className={styles.cartCount}>{quantity}</div>
                        </div>
                    </a>
                </Link>
                <div className={styles.reserve}>RESERVE TABLE </div>

            </div>
        </div>



    </>

}