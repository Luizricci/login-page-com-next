import Cards from "../../components/Cards";
import styles from "./first.module.css";

export default function First() {
    return (
        <div className={styles.page}>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.profile}>
            </div>
          </main>
          <div className={styles.userInfo}>
            <h3 className={styles.title}>sua conta:</h3>
            <div className={styles.form}>
                <legend className={styles.litleTitle}>Nome: Luiz Henrique</legend>
                <legend className={styles.litleTitle}>Minhas Habilidades:</legend>
                <div className={styles.cardsContainer}>
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon" text="Github" />
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="icon" text="HTML" />
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="icon" text="CSS" />
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/2111/2111288.png" alt="icon" text="Git" />
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="icon" text="JavaScript" />
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" alt="icon" text="Next.js" />
                  <Cards imgSrc="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" alt="icon" text="PostgreSQL" />
                  <Cards imgSrc="https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" alt="Postman Icon" text="Postman" />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}