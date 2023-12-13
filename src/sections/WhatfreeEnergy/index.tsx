import LinkButton from "@/component/link";
import style from "@/styles/home.module.scss"
import Image from "next/image";
import imagem from "@/assets/whatsFreeEnergy/whats-free-energy.png"
import imagemMobile from "@/assets/whatsFreeEnergy/whats-free-energy-mobile.png"
import styles from "@/sections/WhatfreeEnergy/styles.module.scss"

export default function WhatfreeEnergy() {
  return (
    <section className={style.conatainerLong} id="principais-duvidas
    ">
      <div className={styles.whatfreeEnergyContainer}>
        <div className={styles.content}>
          <h2>O que é o mercado livre de energia?</h2>

          <p>O Mercado Livre de Energia é um ambiente de contratação onde
            consumidores, geradores e comercializadores de energia elétrica
            podem fechar contratos de compra e venda de energia. Nestes
            contratos, são levados em consideração as necessidades e perfis
            de consumo de cada consumidor.
          </p>

          <p>
            Por se tratar de um ambiente livre, onde os contratos possuem
            prazos e preços definidos, é extremamente importante que o
            consumidor tenha acesso a melhor proposta.
          </p>

          <div>
            <LinkButton url="#fale-com-a-kivolt" label="Quero ter acesso as melhores propostas" typeBtn="green" />
          </div>
        </div>

        <div className={styles.containerImg}>
          <figure>
            <Image
              src={imagem}
              quality={100}
              priority
              alt="Logo tipo"
            />
            <Image
              src={imagemMobile}
              quality={100}
              priority
              alt="Logo tipo"
            />
          </figure>
        </div>

      </div>
    </section>
  )
}