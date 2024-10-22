import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <h1>O Protetor</h1>
      </div>

      <div className={styles.center}>
        <p>A tranquilidade que você precisa, sempre a mão</p>
      </div>

      <div className={styles.grid}>
        <Link href={'/register'} className={styles.card}>Registrar-se</Link>
      </div>
    </main>
  )
}
