import styles from "./header.module.css";
import Image from "next/image";
import logo from "/public/Logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="logo" />
        <div className={styles.about}>
          <p>Home</p>
          <p>Sobre</p>
          <p>Habilidades</p>
          <p>Projetos</p>
          <p>Contato</p>
        </div>
      </header>
      <div className={styles.divisoria}></div>
    </>
  );
}
