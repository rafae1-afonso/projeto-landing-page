import { Header } from "@/components/header";
import { Welcome } from "@/components/welcome";

import styles from "./page.module.scss";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
      <Features/>
    </main>
  );
}
