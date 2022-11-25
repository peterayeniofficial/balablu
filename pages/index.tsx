import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Balablu</title>
        <meta name="description" content="We don't know what we are going to build, maybe we will figure it out." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.linkedin.com/in/peterayeni/">Balablu!</a>
        </h1>

        <p className={styles.description}>
        We don&apos;t know what we are going to build,<br/>{' '}
          <code className={styles.code}>maybe we will figure it out.</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/peterayeni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            Hope
          </span>
        </a>
      </footer>
    </div>
  )
}
