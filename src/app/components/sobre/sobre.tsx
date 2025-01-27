import styles from "./sobre.module.css";
import avatar from "/public/avatar.png";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <Image className={styles.avatar} src={avatar} alt={"avatar"} />
      <div className={styles.textos}>
        <h1>Sobre Mim</h1>
        <h2>
          Prazer, meu nome é <span>Guilherme.</span>
        </h2>
        <p>
          Desde que entrei no universo do <span>Desenvolvimento Web</span>,
          minha missão tem sido transformar ideias em experiências digitais.
          Sempre buscando me manter atualizado, aplicando boas práticas para
          criar sites que não só atendem às expectativas, mas{" "}
          <span>Superam.</span>A cada projeto, meu objetivo é entregar soluções
          que sejam não apenas eficientes, mas também visualmente envolventes,
          acessíveis e, claro, adaptáveis às necessidades de cada usuário.
        </p>
        <p>
          Curso <span>Análise e Desenvolvimento de Sistemas</span> mas já penso
          em engatar uma pós assim que finalizar minha graduação
        </p>
        <p>
          Em 2024, decidi embarcar de vez na jornada de desenvolvimento e
          investi em um curso de Programação Full Stack na B7Web. No final do
          mesmo ano, dei um passo ainda maior com um curso completo de
          Programação Full Stack com mentoria da DevMedia. Desde então, venho me
          aprofundando em tecnologias como{" "}
          <span>
            JavaScript</span>, <span>React</span>, <span>TailwindCSS</span>, <span>TypeScript</span>, <span>Node.js</span>, <span>Next.js</span>, <span>CSS</span> e
            <span> HTML.
          </span>{" "}
          Tenho aplicado esses conhecimentos em projetos práticos de
          desenvolvimento web, sempre buscando aprimorar minhas habilidades e
          entregar soluções de qualidade.
        </p>
        <p>
          Atualmente, estou em transição de carreira, trazendo comigo uma
          bagagem de experiência extensa no setor de vendas. Esse tempo de
          trabalho me ajudou a desenvolver habilidades valiosas, como
          <span>
            {" "}
            comunicação</span>, <span>trabalho em equipe</span>, <span>gestão de tempo</span>, <span>adaptabilidade</span> e a
            <span> capacidade de resolver problemas de forma eficaz</span>.
          {" "}
          Essas habilidades têm sido essenciais no meu novo caminho no mundo da
          tecnologia.
        </p>
        <p>
          Além da programação, tenho uma paixão por estudar línguas e estou sempre
          estudando novos idiomas como hobby. Atualmente, me dedico ao <span>Inglês</span> e
          ao <span>Francês</span>, sem deixar de lado a programação. Também sou apaixonado
          por esportes radicais e adoro conhecer novas culturas. Acredito que a
          troca de experiências, seja no ambiente profissional ou em uma
          conversa social, é sempre uma ótima oportunidade de crescimento.
        </p>
      </div>
    </section>
  );
}
