import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <tbody>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/logo3.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>Michael Newsholme</span>
              </td>
              <td>
                <span className={styles.price}>128GB DDR4</span>
              </td>
              <td>
                <span className={styles.upgrades}>$6000</span>
              </td>

              <td>
                <span className={styles.total}>$9500</span>
              </td>
            </tr>
          </table>
        </tbody>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$9500.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$9500.00
          </div>
          <button className={styles.button}>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
