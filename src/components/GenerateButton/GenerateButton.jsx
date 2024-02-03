import styles from './GenerateButton.module.css'

export default function GenerateButton({ generatePassword }) {
    return (
        <div className={styles.submit}>
            <button
                onClick={() => generatePassword()}
            >
                Gerar senha
            </button>
        </div>
    )
}