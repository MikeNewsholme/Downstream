import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";

const id = () => {
  const [size, setSize] = useState(0);
  const [upgrade, setUpgrade] = useState(0);

  const item = {
    id: 1,
    img: "/img/fullpc.jpg",
    name: "Red Devil",
    price: [6000, 8000, 9500],
    desc: "Velztorm Lux CTO Gaming Desktop PC Liquid-Cooled",
    Memory_Capacity: [32, 64, 128],
    upgrade: [125, 250],
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.image}>
          <Image
            src={item.img}
            alt="red devil"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.rightside}>
        <h1 className={styles.title}>{item.name}</h1>
        <span className={styles.price}>Price: ${item.price[size]}</span>
        <p classname={styles.desc}>{item.desc}</p>
        <h3 className={styles.Memory_Capacity}>Choose your memory capacity:</h3>
        <hr></hr>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src="/img/32GB.jpg"
              alt="32gb"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.gigs}></span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src="/img/64GB.jpg"
              alt="64gb"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.gigs}></span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
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
          <div className={styles.option}>
            <input
              type="checkbox"
              id="upgrade"
              name="upgrade"
              className={styles.checkbox}
            />
            Preloaded Adobe Photoshop/Video editor
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              className={styles.checkbox}
            />
            Express Shipping(1-3 days)
          </div>
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

export default id;
