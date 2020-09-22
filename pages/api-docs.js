import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Developers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLEAR - API Documentation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>API Docs</h1>

        <p className={styles.description}>Under Construction</p>

        <div className={styles.grid}>
          <a href="/data" className={styles.card}>
            <h3>Data &rarr;</h3>
            <p>
              Download our data in multiple formats for use in your standalone
              application.
            </p>
          </a>

          <a href="/docs" className={styles.card}>
            <h3>Endpoints &rarr;</h3>
            <p>How to utilize our API in your web application.</p>
          </a>
          <a href="/support" className={styles.card}>
            <h3>Support &rarr;</h3>
            <p>
              How you can help us make our project better and more useful.
            </p>
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
