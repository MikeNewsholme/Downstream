import Layout from "../component/Layout";
import "../styles/globals.css";
import store from "../redux/store"
import { Provider } from "react-redux"


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
//app js will be used to create other pages while using the same layout with the navbar and footer
