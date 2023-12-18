
import Input from "@/component/Input";
import style from "@/styles/home.module.scss"
import styles from "./styles.module.scss"
import TextArea from "@/component/Textarea";
import { ChangeEvent, useState } from "react";
import Button from "@/component/Button";
import { postLead } from "@/utlls/api";

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
  message: {
    value: string,
    error: boolean,
  },
}

const initialValues = {
  name: {
    value: "",
    error: false,
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
  message: {
    value: "",
    error: false,
  },
};

export default function Form() {
  const [inputsValues, setInputsValues] = useState<LoginProps>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInputsValues({
      ...inputsValues,
      [targetName]: {
        value: targetValue,
        error: onValidateError(targetValue, targetName),
      },
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    onValidateFieldsEmpty();

    if (!Object.values(inputsValues).some((field) => field.error)) {
      const data = {
        name: inputsValues.name.value,
        phone: inputsValues.phone.value,
        city: inputsValues.city.value,
        email: inputsValues.email.value,
        message: inputsValues.message.value,
      };

      getServerSideProps(data);
      // postLead(data);
      // getTeste(data);
    }

  };

  const onValidateError = (value: string, field: string) => {

    if (field === "name" || field === "city" || field === "message") {
      return value.length < 3 ? true : false
    }

    if (field === "phone") {
      return value.length < 15 ? true : false
    }

    if (field === "email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return !emailRegex.test(value) ? true : false
    }

    return true
  }

  const onValidateFieldsEmpty = () => {
    setInputsValues((prevValues) => {
      const updatedValues: LoginProps = { ...prevValues };

      for (const key in updatedValues) {
        if (updatedValues.hasOwnProperty(key) && updatedValues[key as keyof LoginProps].value === '') {
          updatedValues[key as keyof LoginProps].error = true;
        } else {
          updatedValues[key as keyof LoginProps].error = false;
        }
      }

      return updatedValues;
    });
  };


  return (
    <section className={style.conatainerLong} id="fale-com-a-kivolt">
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
            <TextArea label="Mensagem" name="message" onChange={handleChange} error={inputsValues.message.error} />
          </div>
        </form>

        <div className={styles.formBtn}>
          <Button label="Enviar" type="submit" onClick={handleSubmit} typeBtn="green" />
        </div>

      </div>
    </section>
  )
}

async function getServerSideProps(data: any) {
  const apiKey = process.env.API_KEY;
  const auth = process.env.API_AUTH;
  const baseURL = process.env.API_BASE_URL;

  console.log(apiKey)
  console.log(auth)
  console.log(baseURL)

  try {
    const result = await postLead(data, apiKey, auth, baseURL);

    return {
      props: {
        apiResponse: result,
      },
    };
  } catch (error: any) {
    console.error('Erro ao chamar a API no SSR:', error.message);

    return {
      props: {
        apiResponse: null,
      },
    };
  }
}