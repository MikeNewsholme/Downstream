import styles from '../styles/Footer.module.css'
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/logo3.png" height="50" width="50" />
      </div>
      <div className={styles.item}>
        <div className={styles.box}>
          <h2 className={styles.socials}>
            Add us on our socials for the latest news!
          </h2>
        </div>
        <div className={styles.box}>
          <a href="https://www.facebook.com/">
            <Image
              src="/img/facebook.png"
              alt="HTML tutorial"
              width="42"
              height="42"
            />
          </a>
          </div>
          <div className={styles.box}>
            <a href="https://www.instagram.com/">
              <Image
                src="/img/instagram.png"
                alt="HTML tutorial"
                width="42"
                height="42"
              />
            </a>
          </div>
          <div className={styles.box}>
            <a href="https://www.twitter.com/">
              <Image
                src="/img/twitter.png"
                alt="HTML tutorial"
                width="42"
                height="42"
              />
            </a>
          </div>
          <div className={styles.box}>
            <a href="https://www.twitch.tv/">
              <Image
                src="/img/twitch.png"
                alt="HTML tutorial"
                width="42"
                height="42"
              />
            </a>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
