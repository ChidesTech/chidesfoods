import Image from "next/image";
import styles from "../styles/header.module.css";
import Link from "next/link";
export default function Header() {
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
                    <li className={styles.listItem}><i className="fa fa-user"></i> Desmond <i className="fa fa-caret-down"></i></li>
                </ul>
            </div>
            <div className={styles.headerItem}>

                <div className={styles.cart}>

                    <div className={styles.cartIcon}>
                        <i className="fa fa-shopping-cart shopping-cart"></i>

                    </div>
                    <div className={styles.cartCount}>7</div>
                </div>
                <div className={styles.reserve}>RESERVE A TABLE </div>

            </div>
        </div>



    </>

}