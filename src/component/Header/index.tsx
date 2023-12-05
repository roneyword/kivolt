import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assets/header/logo.svg";
import styles from "@/component/Header/styles.module.scss";

import Button from '../Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <figure>
        <Image
          src={logo}
          quality={100}
          priority
          alt="Logo tipo"
        />
      </figure>

      <ul>
        <li><Link href="/" className="header__logo">Início</Link></li>
        <li><Link href="/" className="header__logo">Sobre nós</Link></li>
        <li><Link href="/" className="header__logo">Como te ajudamos</Link></li>
        <li><Link href="/" className="header__logo">Dúvidas</Link></li>
        <li><Link href="/" className="header__logo">Dúvidas</Link></li>
      </ul>

      <div>
        <Button label='login' typeBtn='default' />
      </div>
    </header>
  )
}