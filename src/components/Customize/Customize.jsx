import { useState } from 'react'
import styles from './Customize.module.css'

export default function Customize({ passwordLength, handleChangePasswordLength, handleUpperCaseCheck, handleNumbersCheck, handleSymbolsCheck }) {
    return (
        <section className={`box ${styles.customize}`}>
            <h3 className={styles.customize_title}>Customize</h3>
            <div className={styles.actions}>
                <div className={styles.password_length}>
                    <form>
                        <p>Length: {passwordLength}</p>
                        <input
                            type="range"
                            min={4}
                            max={50}
                            value={passwordLength}
                            className={styles.slider}
                            onChange={(e) => handleChangePasswordLength(e)}
                        />
                    </form>
                </div>

                <div>
                    <label className={styles.checkbox_container}>
                        <span
                            className="text"
                        >
                            Uppercase
                        </span>
                        <input
                            onClick={handleUpperCaseCheck}
                            type="checkbox"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox_container}>
                        <span
                            className="text"
                        >
                            Numbers
                        </span>
                        <input
                            onClick={handleNumbersCheck}
                            type="checkbox"
                        />
                        <span className={styles.checkmark}></span>
                    </label>

                    <label className={styles.checkbox_container}>
                        <span
                            className="text"
                        >
                            Symbols
                        </span>
                        <input
                            onClick={handleSymbolsCheck}
                            type="checkbox"
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>
        </section>
    )
}