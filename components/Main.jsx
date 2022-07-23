import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"




export default function Main(props) {
    return <>
        <Header />
        <Head>
            <title>Chides Food</title>
            <meta name="description" content="Best restaurant in town" />
            <link rel="icon" href="/favicon.ico" />
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css' />
            <link href='http://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css' />
        </Head>
        <br /> <br /> <br /> <br />
        {props.children}
        <Footer />

    </>

}