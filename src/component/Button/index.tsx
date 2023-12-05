import { ButtonHTMLAttributes } from "react";
import styles from "@/component/Button/styles.module.scss";
import Image from 'next/image';
import arrowLeft from "@/assets/icons/arrow-left.svg";
import arrowLeftGreen from "@/assets/icons/arrow-left-green.svg";

type typeButtons = "default" | "green"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  typeBtn?: typeButtons;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


export default function Button({ label = "button default", typeBtn = "default", onClick, ...props }: ButtonProps) {

  const typeClassBtn = typeBtn === "default" ? `${styles.btn}` : `${styles.btn} ${styles.green}`

  return (
    <button className={typeClassBtn} onClick={onClick} {...props}>
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
    </button>
  )


}