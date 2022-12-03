import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { initiateCheckout } from './lib/payments';

import products from '../../products.json';

export default function Home() {
    const handleBuyNow = ({ price, quantity }) => () => {
        initiateCheckout({
            lineItems: [
                { price, quantity },
            ],
        });
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Space Jeely Tshirt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Space Jelly Shop
        </h1>

        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>

        <ul className={styles.grid}>
            {
                products.map(({id, title, description, image, price}) => (
                    <li key={id} className={styles.card}>
                        <a href="https://nextjs.org/docs">
                            <img src={image} alt={title} />
                            <h2>Space Jelly Tshirt</h2>
                            <p>£{price}</p>
                            <p>{description}</p>
                        </a>
                        <p>
                            <button className={styles.button} onClick={handleBuyNow({ price: id, quantity: 1 })}>Buy now</button>
                        </p>
                    </li>
                ))
            }
        </ul>
      </main>
    </div>
  )
}
