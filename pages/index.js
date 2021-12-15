import styles from '../styles/Home.module.css'
import HomeComponent from "../components/home/HomeComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HomeComponent></HomeComponent>
      </main>
    </div>
  )
}
