import LinkButton from "@/component/link";
import styles from "@/styles/home.module.scss";
import style from "@/sections/HowKivoltHelp/styles.module.scss";

export default function HowKivolthelp() {
  return (
    <section className={styles.container} id="como-te-ajudamos
    ">
      <div className={style.howKivolthelpContainer}>
        <div className={style.content}>
          <h2>Como a Kivolt vai ajudar a
            aumentar a sua receita?</h2>

          <p>Todos os consumidores do Grupo A já podem negociar e comprar energia elétrica
            no Mercado Livre de Energia. Este ambiente permite, além de outras vantagens,
            reduzir o custo da energia elétrica em até 40% sem a necessidade de investimento
            inicial.</p>

          <p>
            Através da nossa plataforma, você terá acesso às propostas comerciais dos principais
            geradores e comercializadores de energia do país e contará com o nosso auxílio durante
            todo o processo de migração do seu cliente.</p>
        </div>

        <div className={style.card}>
          <h2>E o mais importante.</h2>

          <p><strong>Você será muito bem remunerado</strong> para cada migração que fizermos juntos!</p>

          <div>
            <LinkButton url="#fale-com-a-kivolt" label="Quero aumentar minha receita" typeBtn="green" />
          </div>

        </div>
      </div>

    </section>
  )
}