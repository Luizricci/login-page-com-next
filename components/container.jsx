import styles from "../styles/container.module.css";


export default function Container( ) {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <main children={styles.main}>

                </main>
            </div>
        </div>
    )
}