import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import leavesImg from "../../../assets/images/2.webp";
import Menu from "../Menu";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Madeline and Junior</title>
        <meta name="description" content="Wedding site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src={leavesImg.src} className={styles.leaves} />
      <header>
        <p className={styles.title}>Madeline & Junior</p>
      </header>
      <div className={styles.postHeader}>August 12th • Stanardsville, VA</div>
      <Menu />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
