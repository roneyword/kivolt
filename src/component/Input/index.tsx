import { InputHTMLAttributes } from "react";
import MaskedInput from 'react-text-mask'
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  error?: boolean,
  mask?: (string | RegExp)[] | ((value: string) => (string | RegExp)[]),
}

export default function Input({ label, error = false, mask, ...rest }: InputProps) {
  const inputFieldClass = `${styles.inputField} ${error ? styles.error : ''}`;
  return (
    <div className={inputFieldClass}>
      <label>{label}</label>
      {mask ? <MaskedInput mask={mask} guide={false} {...rest} /> : <input type="text" {...rest} />}
      {error && <span className={styles.error}>Este campo é obrigatório!</span>}

    </div>
  )
}