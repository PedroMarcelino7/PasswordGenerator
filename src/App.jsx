import './App.css'
import Customize from './components/Customize/Customize'
import Header from './components/Header/Header'
import PasswordBox from './components/PasswordBox/PasswordBox'
import SubmitButton from './components/SubmitButton/SubmitButton'

function App() {
  return (
    <body>
      <main>
        <Header />

        <PasswordBox />

        <Customize />

        <SubmitButton />
      </main>
    </body>
  )
}

export default App
