import styles from './SubmitButton.module.css'

export default function SubmitButton({ generatePassword }) {
    return (
        <div className={styles.submit}>
            <button
                onClick={() => generatePassword()}
                id="copy-2"
            >
                Copiar senha
            </button>
        </div>
    )
}