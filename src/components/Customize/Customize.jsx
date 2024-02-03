import styles from './Customize.module.css'

export default function Customize() {
    return (
        <section className={`box ${styles.customize}`}>
            <h3 className={styles.customize_title}>Personalizar</h3>
            <div className={styles.actions}>
                <div className={styles.password_length}>
                    <p>Tamanho: <span id="password-length-text">16</span></p>
                    <input type="range" name="password-length" id="password-length" className={styles.slider} value="16" min="4" max="64" />
                </div>

                <div>
                    <label className={styles.checkbox_container}>
                        <span className="text">Maiúsculas</span>
                        <input type="checkbox" id="uppercase-check" checked />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkbox_container}>
                        <span className="text">Números</span>
                        <input type="checkbox" id="number-check" checked />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.checkbox_container}>
                        <span className="text">Símbolos</span>
                        <input type="checkbox" id="symbol-check" checked />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>
        </section>
    )
}