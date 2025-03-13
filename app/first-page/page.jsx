import Input from "../../components/Input";
import Button from "../../components/Button"
import styles from "./first.module.css";

export default function First() {
    return (
        <div className={styles.page}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.profile}></div>
          </main>
          <div className={styles.userInfo}>
            <h3>sua conta:</h3>
            <div className={styles.form}>
                <p>Nome: <span> Luiz Henrique </span></p>
                <Input title="E-mail:"/>
                <Button text="Salvar"/>
            </div>
          </div>
        </div>
      </div>
    );
}