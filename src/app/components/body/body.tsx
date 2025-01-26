"use client";
import styles from "./body.module.css";
import Image from "next/image";
import home from '/public/home.png'
import Body_text from "../body_text/body_text";

export default function Body() {
  return (
    <main className={styles.main}>
      <Body_text />
      <Image className={styles.home_img} src={home} alt={'home'}/>
      
    </main>
  );
}
