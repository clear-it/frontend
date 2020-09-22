import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLEAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Clear - About Us</h1>

        <p className={styles.description}>
          Community Lead Expungement Assistance Repository
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/DomBruno" className={styles.card}>
            <h3>Dominick Bruno</h3>
            <p>Project Lead</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>lorem</h3>
            <p>lorem ipsum</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>lorem</h3>
            <p>lorem ipsum</p>
          </a>

          <a href="/" className={styles.card}>
            <h3>Back &rarr;</h3>
            <p>Return to Main Page.</p>
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
