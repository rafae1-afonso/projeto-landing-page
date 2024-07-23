'use client'

import { Header } from "@/components/header";
import { Welcome } from "@/components/welcome";
import { Features } from "@/components/features";
import { Contato } from "@/components/contato";

import styles from "./page.module.scss";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
      <Features/>
      <Contato/>
      <Footer/>
    </main>
  );
}
