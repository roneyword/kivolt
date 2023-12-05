import Image from "next/image";
import styles from "@/sections/Hero/styles.module.scss"
import style from "@/styles/home.module.scss"
import hero from "@/assets/hero/hero.png";
import LinkButton from "@/component/link";

export default function Hero() {
  return (
    <div className={style.container}>
      <div className={styles.heroContainer}>
        <div className={styles.titleMobile}>
          <h1>Aumente suas receitas com o mercado livre de energia.</h1>
        </div>

        <figure>
          <Image
            src={hero}
            quality={100}
            priority
            alt="Logo tipo"
          />
        </figure>

        <div className={styles.content}>
          <h1 className={styles.titleContent}>Aumente suas receitas com o mercado livre de energia.</h1>
          <p>Com a Kivolt, o seu cliente que já está ou que tem potencial para participar do mercado livre de energia, terá acesso aos principais geradores e comercializadores de energia do país.</p>

          <p>Você será remunerado por cada novo contrato que fecharmos juntos!</p>

          <div>
            <LinkButton url="google.com" label="Fale com a Kivolt" typeBtn="green" />
          </div>

        </div>
      </div>
    </div>
  )
}