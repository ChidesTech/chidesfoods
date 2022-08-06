import Main from '../components/Main'
import '../styles/globals.css'
import "../public/fontawesome/all.min.css"
import "../public/fa/all.min.css"
import "../public/css/font-awesome.min.css"
import "../public/css/bootstrap.min.css"
import "../public/css/owl.carousel.css"
import "../public/css/owl.theme.css"
import "../public/css/animate.min.css"
import "../public/css/style.css"
import "../public/icons/flaticon.css"
import "../public/bootstrap.min.css"
import store from '../redux/store'
import { Provider } from 'react-redux'
import {
  persistStore

} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'



function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </PersistGate>
  </Provider>
}

export default MyApp
