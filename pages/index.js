import Head from "next/head";
//import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "../component/Slider";
import Productlist from "../component/Products";
import axios from "axios"
import { useState } from 'react'
import AddButton from "../component/AddButton";

export default function Home({productList, admin}) {
 const [close, setClose] = useState(true)

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Downstream-GG's</title>
        <meta name="description" content="Changing the way you stream" />
        <link rel="icon" href="/img/logo3.png" />
      </Head>
      <Slider/>
      {admin && <AddButton setClose={setClose} />}
      <Productlist productList={productList}/>
      {!close && <Add setClose={setClose}/>}
      
    </div>
  );
}

 //In nextJS you can fetch all data before rendering components and then show components with those props
export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }


  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      productList:res.data,
      admin
    }
  }
}