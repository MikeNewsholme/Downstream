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
        <title>Downstream-GG's</title>
        <meta name="description" content="Changing the way you stream" />
        <link rel="icon" href="/img/logo3.png" />
      </Head>
      <Slider/>
      <Productlist/>
      
    </div>
  );
}
