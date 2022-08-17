import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"
import BottomNav from "./BottomNav"




export default function Main(props) {
    return <>
    <Head>
            <title>Chides Foods</title>
            <meta name="description" content="Best restaurant in town" />
            <link rel="icon" href="/favicon.ico" />
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css' />
            <link rel="stylesheet" href="/fa/all.min.css" />
        </Head>
        <Header />
        
        <br /> <br /> <br /> 
        {props.children}
        <BottomNav/>
        {/* <Footer /> */}

    </>

}