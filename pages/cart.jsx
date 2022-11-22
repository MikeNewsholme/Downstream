import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../component/OrderDetail"
import { useSession } from 'next-auth/react'

const Cart = () => {
  //These values are the props in the UI
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const cart = useSelector((state) => state.cart);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const router = useRouter();
  const dispatch = useDispatch();
  //new code
  const { data: session, status } = useSession({ required: true });

  const createOrder = async (data) => {
    try {
      const res = await axios.post(
        "https://downstream-topaz.vercel.app/api/orders",
        data
      );
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={"paypal"}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  if (status === "authenticated") {
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
              {cart.products.map((product) => (
                <tr className={styles.tr} key={product._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image src={product.img} layout="fill" alt="logo" />
                    </div>
                  </td>
                  <td>
                    <span className={styles.name}>{product.title}</span>
                  </td>
                  <td>
                    <span className={styles.upgrades}>
                      {product.extras.map((upgrade) => (
                        <span key={upgrade._id}>{upgrade.text}, </span>
                      ))}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>${product.price}.00</span>
                  </td>

                  <td>
                    <span className={styles.total}>${product.price}.00</span>
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
              <div className={styles.totalTextTitle}>Subtotal:</div>$
              {cart.total}
              .00
            </div>
            <div className={styles.totalText}>
              <div className={styles.totalTextTitle}>Discount:</div>$0.00
            </div>
            <div className={styles.totalText}>
              <div className={styles.totalTextTitle}>Total:</div>${cart.total}
              .00
            </div>
            {open ? (
              <div className={styles.paymentMethods}>
                <button
                  className={styles.payButton}
                  onClick={() => setCash(true)}
                >
                  CASH ON DELIVERY
                </button>
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AVRNaPQyJVBIhcG7v45AKGqqCOT0C3WDCYjTh6bvxkpGuofGO_fvuv5N3nVFrpHCs_VZWCSIk5XOyt6C",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "p24",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
            ) : (
              <button onClick={() => setOpen(true)} className={styles.button}>
                CHECKOUT NOW!
              </button>
            )}
          </div>
        </div>
        {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
      </div>
    )
  }
} 

export default Cart;
