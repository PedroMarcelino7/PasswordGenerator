import styles from './PasswordBox.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function PasswordBox({ password, handleCopy, generatePassword }) {
    return (
        <section
            className="box"
        >
            <div
                className={styles.password}
            >
                <div
                    className={styles.text}
                >
                    <input type="text" value={password} />
                </div>

                <div className={styles.actions}>
                    <button
                        onClick={() => handleCopy()}
                    >
                        <i class="bi bi-copy"></i>
                    </button>

                    <button
                        onClick={() => generatePassword()}
                    >
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
            </div>
            <div className={styles.security_indicator}>
                <div id="security-indicator-bar" className={styles.bar}></div>
            </div>
        </section>
    )
}