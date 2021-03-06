import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLEAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to CLEAR!</h1>

        <p className={styles.description}>
          Community Lead Expungement Assistance Repository
        </p>

        <div className={styles.grid}>
          <a href="/faq" className={styles.card}>
            <h3>FAQ &rarr;</h3>
            <p>What we do. What we don't do. What you need to know.</p>
          </a>

          <a href="/form" className={styles.card}>
            <h3>Get Started &rarr;</h3>
            <p>Start your search by selecting the state of your convictions.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Meet the Team.</p>
          </a>

          <a href="/api-docs" className={styles.card}>
            <h3>Developers &rarr;</h3>
            <p>How to utilize our API in your projects.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </div>
      </footer>
    </div>
  );
}
