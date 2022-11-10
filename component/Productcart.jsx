import styles from "../styles/Productcart.module.css"
import Image from "next/image"

const Productcart = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/keyboard.jpg' alt='keyboard' width="500" height="500"/>
            <h1 className={styles.title}>Dragon keyboard</h1>
            <span className={styles.price}>$159.99</span>
            <p className={styles.desc}>
                You can get all the E girls with this keyboard
            </p>
        </div>
    )
}

export default Productcart