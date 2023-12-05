import Input from "@/component/Input";
import style from "@/styles/home.module.scss"
import styles from "./styles.module.scss"
import TextArea from "@/component/Textarea";
import { ChangeEvent, useState } from "react";
import Button from "@/component/Button";

const maskPhone12 = ['(', /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

interface LoginProps {
  name: {
    value: string,
    error: boolean,
  },
  phone: {
    value: string,
    error: boolean,
  },
  city: {
    value: string,
    error: boolean,
  },
  email: {
    value: string,
    error: boolean,
  },
  mensage: {
    value: string,
    error: boolean,
  },
}

const initialValues = {
  name: {
    value: "",
    error: true,
  },
  phone: {
    value: "",
    error: false,
  },
  city: {
    value: "",
    error: false,
  },
  email: {
    value: "",
    error: false,
  },
  mensage: {
    value: "",
    error: false,
  },
};

export default function Form() {
  const [inputsValues, setInputsValues] = useState<LoginProps>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    const targetRequired = event.target.required;

    setInputsValues({
      ...inputsValues,
      [targetName]: {
        value: targetValue,
        error: false,
      },
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: inputsValues.name.value,
      phone: inputsValues.phone.value,
      city: inputsValues.city.value,
      email: inputsValues.email.value,
      mensage: inputsValues.mensage.value,
    };

    console.log(data);
    console.log(inputsValues);

  };

  return (
    <section className={style.conatainerLong}>
      <div className={styles.formWrapper}>
        <div className={styles.formTitle}>
          <h2>Aumente suas receitas migrando consumidores para o mercado livre.</h2>
          <p>Preencha o formulário para receber o contato do nosso time.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.formRow}>
            <Input label="Nome" name="name" onChange={handleChange} error={inputsValues.name.error} />
            <Input label="Telefone" name="phone" mask={maskPhone12} onChange={handleChange} error={inputsValues.phone.error} />
            <Input label="Cidade" name="city" onChange={handleChange} error={inputsValues.city.error} />
          </div>
          <div className={styles.formRow}>
            <Input label="E-mail" name="email" onChange={handleChange} error={inputsValues.email.error} />
            <TextArea label="Mensagem" name="mensage" onChange={handleChange} error={inputsValues.mensage.error} />
          </div>
        </form>

        <div className={styles.formBtn}>
          <Button label="Enviar" type="submit" onClick={handleSubmit} typeBtn="green" />
        </div>

      </div>
    </section>
  )
}