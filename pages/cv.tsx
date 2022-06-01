import { getFileContent } from '../lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import type { InferGetStaticPropsType } from 'next';

import styles from '../styles/cv.module.css';
import Head from "next/head";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function CV({ source }: Props) {
  return (
    <>
      <Head>
        <title>CV Roman Kuzmenko</title>
        <meta name="description" content="Roman Kuzmenko-Frontend-developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MDXRemote {...source} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { frontmatter, source } = await getFileContent('cv.mdx');

  return {
    props: {
      meta: {
        title: frontmatter.title,
      },
      source,
    },
  };
}
