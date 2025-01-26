import styles from "./sobre.module.css";
import avatar from '/public/avatar.png'
import Image from "next/image";

export default function Sobre() {
  return (
    <section className={styles.section}>
        <Image className={styles.avatar} src={avatar} alt={'avatar'}/>
      <div className={styles.textos}>
        <h1>Sobre Mim</h1>
        <h2>Prazer, meu nome é <span>Guilherme.</span></h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a illum,
          non ducimus veritatis at laborum dolores praesentium? Iste, id
          quibusdam quam quod delectus quisquam sapiente. Sapiente, alias
          possimus? Magnam.
        </p>
        <p>
          Lorem ipsum dolor sit <span>teste cor</span>amet consectetur,
          adipisicing elit. Sunt provident, cumque nihil vero sapiente quaerat
          qui ea nobis tempora iusto voluptatem nemo et aliquid voluptatibus
          dolo<span>teste cor</span>rem laborum molestiae fugiat dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          <span>teste cor</span>Sunt provident, cumque nihil vero sapiente qu
          <span>teste cor</span>aerat qui ea nobis tempora iusto voluptatem nemo
          et aliquid voluptatibus dolorem laborum molestiae fugiat dolores?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt pr
          <span>teste cor</span>ovident, cumque nihil vero sapiente quaerat qui
          ea nobis tempora iusto voluptatem nemo et aliquid volup
          <span>teste cor</span>tatibus dolorem laborum molestiae fugiat
          dolores?
        </p>
      </div>
    </section>
  );
}
