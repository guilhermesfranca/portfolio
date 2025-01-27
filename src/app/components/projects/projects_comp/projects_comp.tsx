'use client'

import Image, { StaticImageData } from "next/image";
import styles from "./projects_comp.module.css";

type Props = {
  name: string;
  descricao: string;
  image: StaticImageData; // Usado para imagens importadas
  repositorio: string;
  site: string;
};

export default function Projects_comp({
  name,
  descricao,
  image,
  repositorio,
  site,
}: Props) {
  return (
    <div className={styles.projects}>
      <Image src={image} alt={name} />
      <div className={styles.projects_layer}>
        <h2>{name}</h2>
        <p>{descricao}</p>
        <div className={styles.btn_div}>
          <button
            onClick={() =>
              window.open(repositorio, "_blank", "noopener,noreferrer")
            }
          >
            Repositório
          </button>
          <button
            onClick={() =>
              window.open(site, "_blank", "noopener,noreferrer")
            }
          >
            Site
          </button>
        </div>
      </div>
    </div>
  );
}
