//importing styles from styles folder
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="phone" height="32" width="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>281-330-8004</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Software</li>
          <li className={styles.listItem}>Hardware</li>
          <div className={styles.listLogo}>
            <Image
              src="/img/logo3.png"
              alt="stream logo"
              height="80"
              width="80"
            />
          </div>

          <li className={styles.listItem}>Accessories</li>
          <li className={styles.listItem}>Gift Cards</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart logo" height="50" width="50" />
          <div className={styles.itemCounter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
