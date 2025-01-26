import Image from "next/image";
import styles from "./page.module.css";
import logo  from '/public/Logo.png'
import Header from "./components/header/header";
import Body from "./components/body/body";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Body/>
      
    </div>
  );
}



