import Link from "next/link";
import styles from "./page.module.css";
import Button from "../../components/Button";
import Input from "../../components/Input";


export default function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          <form className={styles.loginForm}>
              <legend>Digite Seu E-mail</legend>
            <Input type="text" placeholder="Email" />
              <legend>Digite Sua Senha</legend>  
            <Input type="password" placeholder="Senha" />
            <Link href="/first-page">
              <Button text="Entrar" />
            </Link>
            <Link href="/create-account">
              Criar Conta
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
}
