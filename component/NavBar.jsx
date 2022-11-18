//importing styles from styles folder
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="phone" height="32" width="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>CALL NOW!</div>
          <div className={styles.text}>281-330-8004</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <div className={styles.listLogo}>
            <Image
              src="/img/logo3.png"
              alt="stream logo"
              height="80"
              width="80"
            />
          </div>
          <Link href="" passHref>
            <li className={styles.listItem}>Care Packages</li>
          </Link>
        </ul>
      </div>
      <Link href="/cart" className={styles.item} passHref>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart logo" height="50" width="50" />
          <div className={styles.itemCounter}>{quantity}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
