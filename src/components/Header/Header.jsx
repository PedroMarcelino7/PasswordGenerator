import styles from './Header.module.css'

export default function Header() {
    return (
        <section
            className={styles.header}
        >
            <h1
                className={styles.title}
            >
                Password Generator
            </h1>

            <p
                className={styles.subtitle}
            >
                Use this generator to create a strong and secure password.
            </p>
        </section>
    )
}