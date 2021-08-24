import { NextPage } from "next";
import Image from "next/image";
import Input from "../components/Input";

import styles from "../styles/pages/SignIn.module.scss";

const SignIn: NextPage = () => {
  return (
    <div className={styles.container}>
      <aside>
        <Image
          src="/Vector.png"
          alt="Imagem de fundo"
          height={700}
          width={700}
        />
      </aside>

      <form>
        <h1>Entrar</h1>

        <Input label="Nome" />

        <Input label="E-mail" />

        <Input label="Avatar (URL)" />
      </form>
    </div>
  );
};

export default SignIn;
