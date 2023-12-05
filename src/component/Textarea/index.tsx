import { ChangeEvent, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ label, error = false, onChange, ...rest }: TextareaProps) {
  const inputFieldClass = `${styles.inputField} ${error ? styles.error : ''}`;

  return (
    <div className={inputFieldClass}>
      <label>{label}</label>
      <textarea {...rest} onChange={onChange} />
      {error && <span className={styles.error}>Este campo é obrigatório!</span>}

    </div>
  )

}