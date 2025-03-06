import styles from "../styles/buttons.module.css";

export default function Input( {text} ) {
    return (
        <button className={styles.button}>{text}</button>
    )
}