import { AnchorHTMLAttributes } from "react";
import styles from "@/component/link/styles.module.scss";
import Image from 'next/image';
import arrowLeft from "@/assets/icons/arrow-left.svg";
import arrowLeftGreen from "@/assets/icons/arrow-left-green.svg";
import Link from "next/link";

type typeButtons = "default" | "green"

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: string;
  typeBtn?: typeButtons;
  url: string;
}


export default function LinkButton({ label = "button default", typeBtn = "default", url, ...props }: ButtonProps) {

  const typeClassBtn = typeBtn === "default" ? `${styles.btn}` : `${styles.btn} ${styles.green}`

  return (

    <Link className={typeClassBtn} href={url} {...props}>
      {label}

      <span>
        <Image
          src={typeBtn === "default" ? arrowLeft : arrowLeftGreen}
          width={100}
          quality={100}
          priority
          alt="Logo tipo"
        />
      </span>
    </Link>
  )


}