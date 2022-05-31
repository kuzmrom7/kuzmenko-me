import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Kuzmenko</title>
        <meta name="description" content="Roman Kuzmenko-Frontend-developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Roman Kuzmenko</h1>
        <p className={styles.description}>Frontend developer</p>
        <footer className={styles.footer}>
          <div className={styles.link}>
            <a href="https://github.com/Kuzmrom7">Github</a>
          </div>
          <div className={styles.link}>
            <a href="https://t.me/rkuzmen">Telegram</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home
