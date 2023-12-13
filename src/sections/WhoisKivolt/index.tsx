import styles from "@/sections/WhoisKivolt/styles.module.scss";
import style from "@/styles/home.module.scss";
import Image from "next/image";
import imagem from "@/assets/whoIsKivolt/who-is-kivolt.png"

export default function WhoisKivolt() {
  return (
    <section className={style.conatainerLong} id="sobre-a-kivolt
    ">
      <div className={styles.whoisKivoltContainer}>
        <div className={styles.content}>
          <h2>Quem é a Kivolt</h2>
          <p>A Kivolt nasceu para ser uma plataforma inovadora de comercialização de energia e para facilitar a migração de consumidores para o mercado livre de energia.</p>

          <p>Com o uso de tecnologia, aproximamos os vendedorese consumidores de energia, gerando valor para ambos.</p>

          <p>Junte-se a nós e esteja preparado para o futuro!</p>
        </div>

        <figure>
          <Image
            src={imagem}
            quality={100}
            priority
            alt="Logo tipo"
          />
        </figure>
      </div>
    </section>
  )
}