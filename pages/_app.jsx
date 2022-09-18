import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Layout from '../src/components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}