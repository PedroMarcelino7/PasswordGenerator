import './App.css'
import Header from './components/Header/Header'
import PasswordBox from './components/PasswordBox/PasswordBox'
import SubmitButton from './components/SubmitButton/SubmitButton'

function App() {
  return (
    <body>
      <main>
        <Header />

        <PasswordBox />

        <section className="box customize">
          <h3 className="title">Personalizar</h3>
          <div className="actions">
            <div className="password-length">
              <p>Tamanho: <span id="password-length-text">16</span></p>
              <input type="range" name="password-length" id="password-length" className="slider" value="16" min="4" max="64" />
            </div>
            <div className="config">
              <label className="checkbox-container">
                <span className="text">Maiúsculas</span>
                <input type="checkbox" id="uppercase-check" checked />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container">
                <span className="text">Números</span>
                <input type="checkbox" id="number-check" checked />
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-container">
                <span className="text">Símbolos</span>
                <input type="checkbox" id="symbol-check" checked />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </section>

        <SubmitButton />
      </main>
    </body>
  )
}

export default App
