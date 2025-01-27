"use client";

import styles from "./projects.module.css";
import Projects_comp from "./projects_comp/projects_comp";
import barber from "/public/barber.gif";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <Projects_comp
        name={"Barber França"}
        descricao={`Site de apresentação de uma barbearia que oferece serviços variados para
                diferentes tipos de clientes. Desenvolvidao em ReactJS com HTML, CSS e JavaScript,
                possui uma interface responsiva e recursos de troca de tema de fundo.`}
        image={barber}
        repositorio="https://github.com/guilhermesfranca/barberFranca"
        site="https://www.google.com.br/?hl=pt-BR"
      />

      <Projects_comp
        name={"Barber França"}
        descricao={`Site de apresentação de uma barbearia que oferece serviços variados para
                diferentes tipos de clientes. Desenvolvidao em ReactJS com HTML, CSS e JavaScript,
                possui uma interface responsiva e recursos de troca de tema de fundo.`}
        image={barber}
        repositorio="https://github.com/guilhermesfranca/barberFranca"
        site="https://www.google.com.br/?hl=pt-BR"
      />

      <Projects_comp
        name={"Barber França"}
        descricao={`Site de apresentação de uma barbearia que oferece serviços variados para
                diferentes tipos de clientes. Desenvolvidao em ReactJS com HTML, CSS e JavaScript,
                possui uma interface responsiva e recursos de troca de tema de fundo.`}
        image={barber}
        repositorio="https://github.com/guilhermesfranca/barberFranca"
        site="https://www.google.com.br/?hl=pt-BR"
      />

      <Projects_comp
        name={"Barber França"}
        descricao={`Site de apresentação de uma barbearia que oferece serviços variados para
                diferentes tipos de clientes. Desenvolvidao em ReactJS com HTML, CSS e JavaScript,
                possui uma interface responsiva e recursos de troca de tema de fundo.`}
        image={barber}
        repositorio="https://github.com/guilhermesfranca/barberFranca"
        site="https://www.google.com.br/?hl=pt-BR"
      />

      <Projects_comp
        name={"Barber França"}
        descricao={`Site de apresentação de uma barbearia que oferece serviços variados para
                diferentes tipos de clientes. Desenvolvidao em ReactJS com HTML, CSS e JavaScript,
                possui uma interface responsiva e recursos de troca de tema de fundo.`}
        image={barber}
        repositorio="https://github.com/guilhermesfranca/barberFranca"
        site="https://www.google.com.br/?hl=pt-BR"
      />

      <Projects_comp
        name={"Barber França"}
        descricao={`Site de apresentação de uma barbearia que oferece serviços variados para
                diferentes tipos de clientes. Desenvolvidao em ReactJS com HTML, CSS e JavaScript,
                possui uma interface responsiva e recursos de troca de tema de fundo.`}
        image={barber}
        repositorio="https://github.com/guilhermesfranca/barberFranca"
        site="https://www.google.com.br/?hl=pt-BR"
      />
    </div>
  );
}
