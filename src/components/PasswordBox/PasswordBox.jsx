import styles from './PasswordBox.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function PasswordBox({ password, handleCopy, generatePassword, securityBarWidth, securityBarColor }) {
    return (
        <section
            className="box"
        >
            <div className={styles.password}>
                <div className={styles.text}>
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

            <div
                className={styles.security_indicator}
            >
                <div
                    className={styles.bar}
                    style={{
                        width: `${securityBarWidth}%`,
                        backgroundColor: securityBarColor
                    }}>
                </div>
            </div>
        </section>
    )
}