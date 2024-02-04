import './App.css'
import { useEffect, useState } from 'react'
import Customize from './components/Customize/Customize'
import Header from './components/Header/Header'
import PasswordBox from './components/PasswordBox/PasswordBox'
import GenerateButton from './components/GenerateButton/GenerateButton'
import InformationLabel from './components/InformationLabel/InformationLabel'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(16)
  const [upperCaseCheck, setUpperCaseCheck] = useState(false)
  const [numbersCheck, setNumbersCheck] = useState(false)
  const [symbolsCheck, setSymbolsCheck] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

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
    console.log('password length: ' + passwordLength)

    let passwordChar = ''

    for (let i = 0; i < passwordLength; i++) {
      passwordChar += chars.charAt(Math.random() * chars.length)
    }

    setPassword(passwordChar)
  }

  const handleChangePasswordLength = (e) => {
    setPasswordLength(e.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)

    handleShowLabel()
  }

  const handleShowLabel = () => {
    setShowLabel(true)

    setTimeout(() => {
      setShowLabel(false)
    }, 3000)
  }

  return (
    <body>
      <main>
        <Header />

        <PasswordBox
          password={password}
          handleCopy={handleCopy}
          generatePassword={generatePassword}
          handleShowLabel={handleShowLabel}
        />

        <Customize
          passwordLength={passwordLength}
          handleChangePasswordLength={handleChangePasswordLength}
          handleUpperCaseCheck={handleUpperCaseCheck}
          handleNumbersCheck={handleNumbersCheck}
          handleSymbolsCheck={handleSymbolsCheck}
        />

        <GenerateButton
          generatePassword={generatePassword}
        />

        {showLabel && <InformationLabel />}
      </main>
    </body>
  )
}

export default App
