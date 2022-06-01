import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Roman Kuzmenko</title>
        <meta name="description" content="Roman Kuzmenko-Frontend-developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Roman Kuzmenko</h1>
        <p className={styles.description}>Frontend developer from Saint-Petersburg</p>
        <footer className={styles.footer}>
          <a className={styles.link} href="https://github.com/Kuzmrom7">
            Github
          </a>
          <a className={styles.link} href="https://t.me/rkuzmen">
            Telegram
          </a>
          <Link href="/cv">
            <a className={styles.link}>CV</a>
          </Link>
        </footer>
      </main>
    </>
  );
};

export default Home;
