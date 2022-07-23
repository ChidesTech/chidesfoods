import Main from '../components/Main'
import '../styles/globals.css'
import "../public/fontawesome/all.min.css"
import "../public/css/font-awesome.min.css" 
import "../public/css/bootstrap.min.css" 
import "../public/css/owl.carousel.css" 
import "../public/css/owl.theme.css" 
import "../public/css/animate.min.css" 
import "../public/css/style.css" 
import "../public/icons/flaticon.css" 




function MyApp({ Component, pageProps }) {
  return <Main>
  <Component {...pageProps} />
  </Main>
}

export default MyApp
