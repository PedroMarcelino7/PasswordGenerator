import './App.css'
import { useEffect, useState } from 'react'
import Customize from './components/Customize/Customize'
import Header from './components/Header/Header'
import PasswordBox from './components/PasswordBox/PasswordBox'
import SubmitButton from './components/SubmitButton/SubmitButton'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(16)
  const [upperCaseCheck, setUpperCaseCheck] = useState(false)
  const [numbersCheck, setNumbersCheck] = useState(false)
  const [symbolsCheck, setSymbolsCheck] = useState(false)

  let chars = 'abcdefghijklmnopqrstuvwxyz'
  const charsUpperCase = chars.toUpperCase()
  const numbers = '1234567890'
  const symbols = '?!@&*()[]'

  const updateChars = () => {
    if (upperCaseCheck) {
      chars += charsUpperCase
    }

    if (numbersCheck) {
      chars += numbers
    }

    if (symbolsCheck) {
      chars += symbols
    }
  }

  const handleUpperCaseCheck = () => {
    setUpperCaseCheck(!upperCaseCheck)
  }

  const handleNumbersCheck = () => {
    setNumbersCheck(!numbersCheck)
  }

  const handleSymbolsCheck = () => {
    setSymbolsCheck(!symbolsCheck)
  }

  const generatePassword = () => {
    updateChars()

    console.log(chars)

    for (let i = 0; i < passwordLength; i++) {
      let passwordChar = Math.floor(Math.random() * chars.length)
      setPassword(password + passwordChar)
    }
  }

  const handleChangePasswordLength = (e) => {
    setPasswordLength(e.target.value)
  }

  return (
    <body>
      <main>
        <Header />

        <PasswordBox password={password} />

        <Customize
          passwordLength={passwordLength}
          handleChangePasswordLength={handleChangePasswordLength}
          generatePassword={generatePassword}
          handleUpperCaseCheck={handleUpperCaseCheck}
          handleNumbersCheck={handleNumbersCheck}
          handleSymbolsCheck={handleSymbolsCheck}
        />

        <SubmitButton />
      </main>
    </body>
  )
}

export default App
