import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Faq() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLEAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>CLEAR - FAQs</h1>

        <p className={styles.description}>Frequently Asked Questions</p>

        <div className={styles.grid}>
          <p className={styles.card}>
            <h3>How it works</h3>
            Our team collects data from every state regarding eligibility for
            expungement. You simply select the state your were convicted in and
            answer the questions. The system will tell you if our research
            indicates you are likely to be eligible for expungement. The system
            only sends the state data to our server to request the correct
            information. All further operations occur on your own device for
            both speed and privacy.
          </p>
          <p className={styles.card}>
            <h3>How it does NOT work</h3>
            We are a volunteer run project and we do not offer legal advice nor
            do we offer legal referrals. Due to the highly discretionary nature
            of expungement, rapidly shifting laws, and the peculiarities of
            individual cases, it is impossible for an automated system to offer
            100% certain results. All results should be verified by checking the
            "source" link provided and/or a lawyer.
          </p>

          <p className={styles.card}>
            <h3>What do I need to know?</h3>
            <ul>
              <li>The state you were convicted in</li>
              <li>When your sentence was completed</li>
              <li>The nature of the crime</li>
              Many states also have other requirements such as maintainence of a
              clean record,payment of fines, etc.
            </ul>
          </p>

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
