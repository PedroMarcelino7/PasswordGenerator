import styles from './CopyPasswordButton.module.css'

export default function CopyPasswordButton({ handleCopy }) {
    return (
        <div className={styles.submit}>
            <button
                onClick={() => handleCopy()}
            >
                Copiar senha
            </button>
        </div>
    )
}