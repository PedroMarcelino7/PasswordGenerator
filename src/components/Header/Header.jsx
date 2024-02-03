import styles from './Header.module.css'

export default function Header() {
    return (
        <section className={styles.header}>
            <h1 className="title">Gerador de senha</h1>
            <p className="subtitle">
                Utilize o nosso gerador online para criar uma senha forte e segura.
            </p>
        </section>
    )
}