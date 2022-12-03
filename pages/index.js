import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import background from '../public/background-dark.webp'

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <Head>
        <title>Electronic Hat</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Electronic Hat!</h1>

        <p className={styles.description}>
          Electronic Hat aims to be an active and welcoming community server. We
          are currently running a whitelist so feel free to join our{' '}
          <a href='https://discord.gg/79mKr7jpCA'>Discord Server</a> and apply
          for a slot!
        </p>

        <div className={styles.grid}>
          <a href='https://discord.gg/79mKr7jpCA' className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Join our Discord server to connect with the community</p>
          </a>

          <a href='https://map.electronichat.online/' className={styles.card}>
            <h2>Server Map &rarr;</h2>
            <p>A live map of the server.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
