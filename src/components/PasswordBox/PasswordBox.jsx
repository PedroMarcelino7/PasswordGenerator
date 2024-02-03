import styles from './PasswordBox.module.css'

import Copy from '../../../src/images/copy.svg'
import Renew from '../../../src/images/renew.svg'

export default function PasswordBox() {
    return (
        <section className="box">
            <div className={styles.password}>
                <div className={styles.text}>
                    <input type="text" name="password" id="password" />
                </div>
                <div className={styles.actions}>
                    <button id="copy-1">
                        <img src={Copy} width="42" />
                    </button>
                    <button id="renew">
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