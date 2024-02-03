import styles from './PasswordBox.module.css'

import Copy from '../../../src/images/copy.svg'
import Renew from '../../../src/images/renew.svg'

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
                        <img src={Copy} width="42" />
                    </button>

                    <button
                        onClick={() => generatePassword()}
                    >
                        <img src={Renew} width="42" />
                    </button>
                </div>
            </div>
            <div className={styles.security_indicator}>
                <div id="security-indicator-bar" className={styles.bar}></div>
            </div>
        </section>
    )
}