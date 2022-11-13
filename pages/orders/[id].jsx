import styles from "../../styles/Order.module.css"
import Image from "next/image"

const Order = () => {
    const status = 0
    const statusClass = (index) => {
if (index-status < 1) return styles.done;
if (index - status === 1) return styles.inProgress;
if (index - status > 1) return styles.undone;
    }
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}>
            <tbody>
              <table className={styles.table}>
                <tr className={styles.tr}>
                  <th>Order ID:</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>
                    <span className={styles.id}>321321</span>
                  </td>
                  <td>
                    <span className={styles.name}>Mike Newsholme</span>
                  </td>
                  <td>
                    <span className={styles.address}>1135 Castle drive</span>
                  </td>

                  <td>
                    <span className={styles.total}>$9500</span>
                  </td>
                </tr>
              </table>
            </tbody>
          </div>
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image src="/img/payment.png" width="75" height="75" alt="" />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width="30"
                  height="30"
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image src="/img/preparing.png" width="75" height="75" alt="" />
              <span>Preparing Order</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width="30"
                  height="30"
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image
                src="/img/outfordelivery.png"
                width="75"
                height="75"
                alt=""
              />
              <span>Out For Delivery</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width="30"
                  height="30"
                  alt=""
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image src="/img/delivered.png" width="75" height="75" alt="" />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image
                  className={styles.checkedIcon}
                  src="/img/checked.png"
                  width="30"
                  height="30"
                  alt=""
                />
              </div>
            </div>
          </div>
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
            <button disabled className={styles.button}>
              PAID
            </button>
          </div>
        </div>
      </div>
    );
}

export default Order