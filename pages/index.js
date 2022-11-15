import Head from "next/head";
//import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../component/Slider";
import Productlist from "../component/Products";
import axios from "axios"

export default function Home({productList}) {
 

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Downstream-GG's</title>
        <meta name="description" content="Changing the way you stream" />
        <link rel="icon" href="/img/logo3.png" />
      </Head>
      <Slider/>
      <Productlist productList={productList}/>
      
    </div>
  );
}

 //In nextJS you can fetch all data before rendering components and then show components with those props
export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      productList:res.data
    }
  }
}