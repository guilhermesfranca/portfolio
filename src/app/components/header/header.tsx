import styles from "./header.module.css";
import Image from "next/image";
import logo from "/public/Logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="logo" />
        <div className={styles.about}>
          <a>Home</a>
          <a>Sobre</a>
          <a>Habilidades</a>
          <a>Projetos</a>
          <a>Contato</a>
        </div>
      </header>
      <div className={styles.divisoria}></div>
    </>
  );
}
