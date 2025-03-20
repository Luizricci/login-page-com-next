import styles from "../styles/inputs.module.css";

export default function Input({ type, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.input}
        />
    );
}