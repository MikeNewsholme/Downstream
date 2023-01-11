import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { useSession } from "next-auth/react";

const id = ({ product }) => {
  const [price, setPrice] = useState(product.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { data: session, status } = useSession({ required: true });

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity }));
  };
  //what i am passing as a payload


  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.leftside}>
          <div className={styles.image}>
            <Image src={product.img} alt="" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className={styles.rightside}>
          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.price}>Price: ${price}</span>
          <p className={styles.desc}>{product.desc}</p>
          <h3 className={styles.Memory_Capacity}>
            Choose your memory capacity:
          </h3>
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
                src="/img/64gb.jpg"
                alt="64gb"
                layout="fill"
                objectFit="contain"
              />
              <span className={styles.gigs}></span>
            </div>
            <div className={styles.size} onClick={() => handleSize(2)}>
              <Image
                src="/img/128gb.jpg"
                alt="128gb"
                layout="fill"
                objectFit="contain"
              />
              <span className={styles.gigs}></span>
            </div>
          </div>

          <h3 className={styles.choose}>Additonal</h3>
          <div className={styles.addon}>
            {product.extraOption.map((option) => (
              <div className={styles.option} key={option._id}>
                <input
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double">{option.text}</label>
              </div>
            ))}
          </div>
          <hr></hr>
          <div className={styles.add}>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              defaultValue={1}
              className={styles.quantity}
            />
            <button className={styles.button} onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://downstream-topaz.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default id;
