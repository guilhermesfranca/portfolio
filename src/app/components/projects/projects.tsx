"use client";

import styles from "./projects.module.css";
import Projects_comp from "./projects_comp/projects_comp";
import barber from "/public/barber.gif";

export default function Projects() {
  const projetos = [
    {
      name: "Barber França",
      descricao: "Descrição do projeto aqui.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      name: "Barber França",
      descricao: "Descrição do projeto aqui.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      name: "Barber França",
      descricao: "Descrição do projeto aqui.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      name: "Barber França",
      descricao: "Descrição do projeto aqui.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      name: "Barber França",
      descricao: "Descrição do projeto aqui.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      name: "Barber França",
      descricao: "Descrição do projeto aqui.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    
  ];
  
  return (
    <div className={styles.projects}>
      {projetos.map((projeto, index) => (
        <Projects_comp
          key={index}
          name={projeto.name}
          descricao={projeto.descricao}
          image={projeto.image}
          repositorio={projeto.repositorio}
          site={projeto.site}
        />
      ))}
    </div>
  );
}