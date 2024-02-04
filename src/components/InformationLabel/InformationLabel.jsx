import styles from './InformationLabel.module.css'

export default function InformationLabel({ text }) {
    return (
        <div className={styles.information_box}>
            <div className={styles.information}>
                <p>Copied to clipboard</p>
            </div>
        </div>
    )
}