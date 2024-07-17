import { Header } from "@/components/header";
import { Welcome } from "@/components/welcome";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
    </main>
  );
}
