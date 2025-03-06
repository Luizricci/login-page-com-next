import styles from "../styles/inputs.module.css";

export default function Input( {title} ) {
    return (
        <div className={styles.divInput}>
            <label htmlFor="username">{title}</label>
            <input type="text" id="username" name="username" required />
        </div>
    )
}