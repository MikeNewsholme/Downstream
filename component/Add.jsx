import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOption, setExtraOption] = useState([]);
  const [extra, setExtra] = useState(null);

  

  //find current prices first and change its value and set prices afterwards
  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  // handling multiple inputs in one handler
  // set extra to previous version of extra, and event target = target value
  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };
  //setting state using previous data
  const handleExtra = (e) => {
    setExtraOption((prev) => [...prev, extra]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dvv8y2j8h/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        prices,
        extraOption,
        img: url,
      };

      await axios.post(
        "https://downstream-topaz.vercel.app/api/products",
        newProduct
      );
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
{
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add a new Product</h1>
        <div className={styles.item}>
          <label className={styles.label}>Choose an image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Set 3 prices depending on RAM upgrade</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="32GB"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="64GB"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="128GB"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        
        <div className={styles.item}>
          <label className={styles.label}>Add Extra items and price then click add ---</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOption.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div> 
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};
}

export default Add;
