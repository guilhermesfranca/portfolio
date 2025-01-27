"use client";

import styles from "./projects.module.css";
import Projects_comp from "./projects_comp/projects_comp";
import barber from "/public/barber.gif";
import cafe from "/public/cafe.gif";
import petshop from "/public/petshop.gif";
import simpsons from "/public/simpsons.gif";
import realstate from "/public/realstate.gif";
import cruzeiro from "/public/cruzeiro.gif";

export default function Projects() {
  const projetos = [
    {
      name: "Barber França",
      descricao:
        "Este é um projeto de uma landing page para um barbearia, desenvolvido como parte da minha jornada de aprendizado em React. O objetivo principal foi praticar o uso dos hooks useState e useEffect, além de aplicar conceitos de design e usabilidade.",
      image: barber,
      repositorio: "https://github.com/guilhermesfranca/barberFranca",
      site: "https://www.google.com.br/?hl=pt-BR",
    },
    {
      name: "Casinha do Café",
      descricao:
        "Bem-vindo ao projeto Casinha do Café, uma página de café inspirada na cultura francesa e no sabor autêntico do café de Minas Gerais, Brasil. O objetivo deste site é proporcionar aos visitantes uma experiência única, destacando a qualidade do café, informações sobre o local, os horários de funcionamento e formas de contato.",
      image: cafe,
      repositorio: "https://github.com/guilhermesfranca/coffeshop",
      site: "https://guilhermesfranca.github.io/coffeshop/",
    },
    {
      name: "França's Pet Shop",
      descricao:
        "A página inicial do Petshop França's foi desenvolvida utilizando HTML e CSS, oferecendo uma experiência visualmente atraente e funcional para os usuários, com link para contato direto com o Whatsapp.",
      image: petshop,
      repositorio: "https://github.com/guilhermesfranca/petshop",
      site: "https://guilhermesfranca.github.io/petshop/",
    },
    {
      name: "Simpsons Dex",
      descricao:
        "Página inicial de uma wikipédia inspirada no desenho animado Os Simpsons, com algumas informações sobre alguns personagens importantes e notáveis da série, foram utilizados conhecimentos em HTML, Css e JavaScript.",
      image: simpsons,
      repositorio: "https://github.com/guilhermesfranca/simpsonsdex",
      site: "https://guilhermesfranca.github.io/simpsonsdex/",
    },
    {
      name: "Imobiliária França",
      descricao:
        "Landing Page de imobiliária com contato direto com opção para contato direto com os corretores.",
      image: realstate,
      repositorio: "https://github.com/guilhermesfranca/realstate",
      site: "https://guilhermesfranca.github.io/realstate/",
    },
    {
      name: "Landing Page Cruzeiro",
      descricao:
        "Este projeto é uma página web personalizada, desenvolvida para criar um link bio interativo para o Cruzeiro Esporte Clube. A página inclui links para as redes sociais do clube e informações sobre alguns de seus títulos mais significativos, com um design visual impactante e responsivo.",
      image: cruzeiro,
      repositorio: "https://github.com/guilhermesfranca/cruzeirolink",
      site: "https://guilhermesfranca.github.io/cruzeirolink/",
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>
        Meus <span>Projetos</span>
      </h2>
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
    </div>
  );
}
