import Link from "next/link";
import styles from "../../styles/page.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form className={styles.loginForm}>
          <Input title="Nome de Usuário:"/>
          <Input title="Senha:"/>
          <Button text="Entrar" />
          <Link href="/create-account">
            Criar Conta
          </Link>
        </form>
      </main>
    </div>
  );
}
