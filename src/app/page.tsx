import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

          <h1>O Protetor</h1>
        <div className={styles.ctas}>

          <p>A tranquilidade que você precisa, sempre a mão</p>
        </div>
      </main>
      <footer className={styles.footer}>
        Todos os direitos reservados
      </footer>
    </div>
  );
}
