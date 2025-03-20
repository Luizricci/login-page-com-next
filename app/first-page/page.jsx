
import Button from "../../components/Button"
import Input from "../../components/Input"
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
                <legend>Nome:</legend>
                <Input type="text" placeholder="Digite seu nome" />
                <legend>biografia:</legend>
                <Input type="text" placeholder="Biografia" />
                <Button text="Enviar" />
            </div>
          </div>
        </div>
      </div>
    );
}