import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Downstream App for streaming supplies</title>
        <meta name="description" content="Changing the way you stream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
      <Image src="/img/rgbkeys.jpg" alt="keyboard" width="300" height="300"/>
      </div>
  )
}
