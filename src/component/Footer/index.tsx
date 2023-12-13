import Image from "next/image";
import Link from "next/link";
import style from "@/component/Footer/styles.module.scss"
import faceIcon from "@/assets/icons/icon-facebook.svg"
import instaIcon from "@/assets/icons/icon-instagram.svg"
import linkIcon from "@/assets/icons/icon-linkedin.svg"
import iconFooter from "@/assets/icons/Logo-branca.png"
import styles from "@/styles/home.module.scss"


export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={styles.container}>
        <div className={style.footerWrapper}>
          <figure>
            <Image src={iconFooter} alt="logo do facebook" />
          </figure>

          <div className={style.content}>
            <p>KIVOLT LTDA. CNPJ: 99.999.999/9999-99</p>
            <p>© Kivolt - Por um mundo com mais energia solar</p>
          </div>

          <ul className={style.socialList}>
            <li>
              <Link href="https://wwww.facebook.com">
                <Image src={faceIcon} alt="logo do facebook" />
              </Link>
            </li>
            <li>
              <Link href="https://wwww.facebook.com">
                <Image src={instaIcon} alt="logo do instagram" />
              </Link>
            </li>
            <li>
              <Link href="https://wwww.facebook.com">
                <Image src={linkIcon} alt="logo do linkedin" />
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </footer>
  )
}