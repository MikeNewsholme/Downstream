import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux"

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map(product => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src="/img/logo3.png" layout="fill" alt="logo" />
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
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <div className={styles.totalTextTitle}>Subtotal:</div>$9500.00
          </div>
          <div className={styles.totalText}>
            <div className={styles.totalTextTitle}>Discount:</div>$0.00
          </div>
          <div className={styles.totalText}>
            <div className={styles.totalTextTitle}>Total:</div>$9500.00
          </div>
          <button className={styles.button}>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
