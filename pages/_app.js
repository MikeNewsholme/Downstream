import Layout from "../component/Layout";
import "../styles/globals.css";
import store from "../redux/store"
import { Provider } from "react-redux"
import {SessionProvider} from "next-auth/react"


function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
//app js will be used to create other pages while using the same layout with the navbar and footer
