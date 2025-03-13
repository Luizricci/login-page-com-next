import Link from "next/link";
import styles from "./page.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <main className={styles.main}>
          <form className={styles.loginForm}>
            <Input title="Nome de Usuário:"/>
            <Input title="Senha:"/>
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
