import Image from "next/image";
import styles from "./skills.module.css";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import brasil from "/public/brasil.png";
import usa from "/public/usa.png";
import france from "/public/france.png";

export default function Skills() {
  return (
    <section id="habilidades" className={styles.section}>
      <h2>Minhas Habilidades</h2>
      <div className={styles.box}>
        <div>
          <FaReact />
          <h3>React</h3>
        </div>
        <div>
          <TbBrandJavascript />
          <h3>JavaScript</h3>
        </div>
        <div>
          <IoLogoHtml5 />
          <h3>HTML</h3>
        </div>
        <div>
          <IoLogoCss3 />
          <h3>CSS</h3>
        </div>
        <div>
          <FaGitAlt />
          <h3>Git</h3>
        </div>
        <div>
          <SiTailwindcss />
          <h3>Tailwind</h3>
        </div>
        <div>
          <SiTypescript />
          <h3>Typescript</h3>
        </div>
        <div>
          <DiVisualstudio />
          <h3>Vs Code</h3>
        </div>
      </div>
      <h2 id="idiomas">Idiomas</h2>
      <div className={styles.flags_box}>
        <div>
          <Image src={brasil} alt={"brasil"} className={styles.flags} />
          <h3>Português</h3>
          <p>Nativo</p>
        </div>
        <div>
          <Image src={usa} alt={"usa"} className={styles.flags} />
          <h3>Inglês</h3>
          <p>B2 - C1</p>
          <span>
            Ótima comunicação profissional e cotidiana, com boa compreensão de
            textos e conversação avançada.
          </span>
        </div>
        <div>
          <Image src={france} alt={"france"} className={styles.flags} />
          <h3>Francês</h3>
          <p>A2 - B1 </p>
          <span>
            Já consigo me comunicar bem em conversas simples e entender
            conversas de nível intermediário.
          </span>
        </div>
      </div>
    </section>
  );
}
