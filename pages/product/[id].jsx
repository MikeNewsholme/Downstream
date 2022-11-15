import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";
import axios from "axios";

const id = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, upgrade) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(upgrade.price);
      setExtras((prev) => [...prev, upgrade]);
    } else {
      changePrice(-upgrade.price);
      setExtras(extras.filter((extra) => extra._id !== upgrade._id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.image}>
          <Image
            src={product.img}
            alt="red devil"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.rightside}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>Price: ${price}</span>
        <p classname={styles.desc}>{product.desc}</p>
        <h3 className={styles.Memory_Capacity}>Choose your memory capacity:</h3>
        <hr></hr>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image
              src="/img/32GB.jpg"
              alt="32gb"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.gigs}></span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image
              src="/img/64GB.jpg"
              alt="64gb"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.gigs}></span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image
              src="/img/128GB.jpg"
              alt="128gb"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.gigs}></span>
          </div>
        </div>
        <hr></hr>
        <h3 className={styles.choose}>Choose additional features:</h3>
        <div className={styles.addon}>
          {product.extraOption.map((upgrade) => (
            <div className={styles.upgrade} key={upgrade._id}>
              <input
                type="checkbox"
                id={upgrade.text}
                name={upgrade.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, upgrade)}
              />
              <label htmlFor="double">{upgrade.text}</label>
            </div>
          ))}
          <hr></hr>
          <div className={styles.add}>
            <imput type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default id;
