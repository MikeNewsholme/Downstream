import Image from "next/image";
import styles from '../styles/Background.module.css'

const Background = () => {
    return(
        <div className={styles.container}>
        <Image src="/img/purple.png" alt="background image" layout="fill"/>
        </div>
    )
}

export default Background