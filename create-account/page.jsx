import styles from "../styles/page.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Create() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form className={styles.loginForm}>
          <Input title="Nome de Usuário:"/>
          <Input title="Senha:"/>
          <Button text="Criar Conta"/>
        </form>
      </main>
    </div>
  );
}