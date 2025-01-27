import styles from "./header.module.css";
import Image from "next/image";
import logo from "/public/Logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="logo" />
        <div className={styles.about}>
        <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#idiomas">Idiomas</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </header>
      <div className={styles.divisoria}></div>
    </>
  );
}
