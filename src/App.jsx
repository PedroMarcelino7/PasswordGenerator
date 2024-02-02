import './App.css'

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <h1 className="title">Gerador de senha</h1>
          <p className="subtitle">
            Utilize o nosso gerador online para criar uma senha forte e segura.
          </p>
        </section>

        <section className="box">
          <div className="password">
            <div className="text">
              <input type="text" name="password" id="password" />
            </div>
            <div className="actions">
              <button id="copy-1">
                <img src="copy.svg" width="42" />
              </button>
              <button id="renew">
                <img src="renew.svg" width="42" />
              </button>
            </div>
          </div>
          <div className="security-indicator">
            <div id="security-indicator-bar" className="bar"></div>
          </div>
        </section>

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

        <div className="submit">
          <button id="copy-2">Copiar senha</button>
        </div>
      </main>
    </>
  )
}

export default App
