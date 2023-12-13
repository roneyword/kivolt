import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/header/logo.png";
import styles from "@/component/Header/styles.module.scss";
import style from "@/styles/home.module.scss"

import Button from '../Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={style.container}>
        <div className={styles.headerWrapper}>
          <figure>
            <Image
              src={logo}
              quality={100}
              priority
              alt="Logo tipo"
            />
          </figure>

          <ul>
            <li><Link href="#inicio" className="header__logo">Início</Link></li>
            <li><Link href="#sobre-a-kivolt" className="header__logo">Sobre nós</Link></li>
            <li><Link href="#como-te-ajudamos" className="header__logo">Como te ajudamos</Link></li>
            <li><Link href="#principais-duvidas" className="header__logo">Dúvidas</Link></li>
          </ul>

          <div className={styles.headerBtn}>
            <Button label='login' typeBtn='default' />
          </div>
        </div>

      </div>
    </header>
  )
}