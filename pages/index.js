import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../component/Footer";
import Navbar from "../component/NavBar";
import Slider from "../component/Slider";
import Productlist from "../component/Products";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Downstream App for streaming supplies</title>
        <meta name="description" content="Changing the way you stream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <Productlist/>
      
    </div>
  );
}
