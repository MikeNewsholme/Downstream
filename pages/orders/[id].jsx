import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
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
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>

                <td>
                  <span className={styles.total}>${order.total}.00</span>
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
};

//getting server side props
//grabbing parameters(id) and making the API request
//setting props to order
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://downstream-topaz.vercel.app/api/orders/${params.id}`
  );
  return {
    props: { order: res.data },
  };
};

export default Order;
