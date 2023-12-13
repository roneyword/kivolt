import Accordion from "@/component/Accordion";
import styles from "@/styles/home.module.scss";
import style from "./styles.module.scss"
import Image from 'next/image';
import image1 from "@/assets/whatIsIt/5-esquerda-topo.png"
import image2 from "@/assets/whatIsIt/5-esquerda-baixo.png"
import image3 from "@/assets/whatIsIt/5-direita.png"

const accordionItems = [
  {
    title: "O que é",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt natus pariatur distinctio iste aliquid expedita recusandae quia labore vitae, id sequi repellendus est praesentium, non tenetur quos! Commodi, molestiae."
  },
  {
    title: "O que é",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt natus pariatur distinctio iste aliquid expedita recusandae quia labore vitae, id sequi repellendus est praesentium, non tenetur quos! Commodi, molestiae."
  },
  {
    title: "O que é",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt natus pariatur distinctio iste aliquid expedita recusandae quia labore vitae, id sequi repellendus est praesentium, non tenetur quos! Commodi, molestiae."
  },
]

export default function WhatIsIt() {
  return (
    <section className={styles.container}>
      <div className={style.wrapper}>
        <div className={style.accordion}>
          <Accordion items={accordionItems} />
        </div>

        <div className={style.imgs}>
          <div className={style.col}>
            <figure>
              <Image
                src={image1}
                quality={100}
                priority
                alt="Logo tipo"
              />
            </figure>
            <figure>
              <Image
                src={image2}
                quality={100}
                priority
                alt="Logo tipo"
              />
            </figure>
          </div>

          <div className={style.col}>
            <figure>
              <Image
                src={image3}
                quality={100}
                priority
                alt="Logo tipo"
              />
            </figure>
          </div>
        </div>
      </div>

    </section>
  )
}