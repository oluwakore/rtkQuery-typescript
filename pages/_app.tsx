import '../styles/globals.css'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }: AppProps) {
    return  (
    <>
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
      </Provider>
      </>
      )
}

export default MyApp
