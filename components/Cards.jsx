import styles from '../styles/Cards.module.css';

export default function Cards({imgSrc, alt, text}) {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt={alt} />
            <p>{text}</p>
        </div>
    );
}