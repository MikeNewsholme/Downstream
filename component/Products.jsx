import styles from '../styles/Productlist.module.css'
import Productcart from './Productcart'

const Productlist = ({productList}) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Getting you back in the game</h1>
        <p className={styles.desc}>
          "If no one thinks you're crazy, you're not quite operating on the outer limits of your potential"
        </p>
        <div className={styles.wrapper}>
          {productList.map((product) => (
            <Productcart key = {product._id} product={product}/>
          ))}
        </div>
      </div>
    );
}
export default Productlist