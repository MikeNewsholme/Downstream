import styles from '../styles/Productlist.module.css'
import Productcart from './Productcart'

const Productlist = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Getting you back in the game</h1>
        <p className={styles.desc}>
          In Franklin's tower the four winds sleep. Like four lean hounds the
          lighthouse keep. Wildflower seed on the sand and wind. May the four
          winds blow you home again. Roll away, the dew
        </p>
        <div className={styles.wrapper}>
          <Productcart />
          <Productcart />
          <Productcart />
          <Productcart />
          <Productcart />
          <Productcart />
          
        </div>
      </div>
    );
}
export default Productlist