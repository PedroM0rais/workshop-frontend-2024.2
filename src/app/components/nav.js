import Link from "next/link"
import styles from "./nav.module.css"

export default function Nav() {
    return(
      <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>VALORANT</h1>
        <nav className={styles.nav}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/page/card">
          Cards
        </Link>
        <Link className={styles.link} href="/page/character">
          Find Character
        </Link>
    </nav>
      </div>
      </main>
    )
}