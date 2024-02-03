import styles from './SubmitButton.module.css'

export default function SubmitButton() {
    return (
        <div className={styles.submit}>
            <button id="copy-2">Copiar senha</button>
        </div>
    )
}