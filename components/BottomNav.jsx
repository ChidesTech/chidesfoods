import Link from "next/link"

export default function BottomNav (){
    return (
        <div className="bottom-nav">
            <Link href="/">
            <div style={{color:"white"}} href="" ><i className="fa fa-search"></i> </div>
            </Link>
            <Link href="/">
            <div style={{color:"white"}} href="" ><i className="fa fa-user"></i> </div>
            </Link>
           
            <Link href="/">
            <div style={{color:"white"}} href="" ><i className="fa fa-shopping-cart"></i> </div>
            </Link>
            <Link href="/">
            <div style={{color:"white"}} href="" ><i className="fa fa-bars"></i> </div>
            </Link>
           
        </div>
    )
}
