import React from 'react';
import styles from '../styles/languages.module.css';
import { useRouter } from 'next/router';
import cn from 'classnames';
import Link from 'next/link';

const Languages: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <Link href="/">
        <h3 className={cn(styles.item, styles.itemLeft)}>Home</h3>
      </Link>
      <Link href="/cv">
        <h3 className={cn(styles.item, router.pathname === '/cv' && styles.itemActive)}>Ru</h3>
      </Link>
      <Link href="/cv/eng">
        <h3 className={cn(styles.item, router.pathname === '/cv/eng' && styles.itemActive)}>Eng</h3>
      </Link>
    </div>
  );
};

export default Languages;
