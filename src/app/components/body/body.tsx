"use client";
import styles from "./body.module.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Body() {
  return (
    <main className={styles.div_apresentacao}>
      <div className={styles.text_apresentacao}>
        <h3>Olá, meu nome é</h3>
        <strong>Guiherme França</strong>
        <p>
          Desenvolvedor <span>Front-end</span>
        </p>
      </div>
      <p>
        Desenvolvendo soluções web que conectam ideias e pessoas com{" "}
        <span>código</span> e <span>criatividade</span>
      </p>
      <div className={styles.social}>
        <button
          onClick={() =>
            window.open("https://github.com/guilhermesfranca", "_blank")
          }
        >
          <FaGithub />
        </button>
        <button
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/guilhermesfranca/",
              "_blank"
            )
          }
        >
          <FaLinkedinIn />
        </button>
        <button
          onClick={() =>
            (window.location.href = "mailto:guilhermesfranca@outlook.com")
          }
        >
          <SiGmail />
        </button>{" "}
        <button
          onClick={() =>
            window.open(
              "https://wa.me/5531996961455?text=Ol%C3%A1%2C%20vi%20seu%20Porfolio%20e%20gostei",
              "_blank"
            )
          }
        >
          <FaWhatsapp />
        </button>
      </div>
      <button className={styles.cv}>Download CV</button>
    </main>
  );
}
