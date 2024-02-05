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
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [securityBarWidth, setSecurityBarWidth] = useState(0)
  const [securityBarColor, setSecurityBarColor] = useState('')

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

  const handlePasswordStrength = () => {
    setPasswordStrength(0)
    let strength = Number(passwordLength) + 5;

    if (upperCaseCheck) {
      strength += 10;
    }

    if (numbersCheck) {
      strength += 15;
    }

    if (symbolsCheck) {
      strength += 20;
    }

    console.log(strength)

    setPasswordStrength(strength);
  }

  useEffect(() => {
    handlePasswordStrength();
  }, [passwordLength, upperCaseCheck, numbersCheck, symbolsCheck]);

  useEffect(() => {
    if (passwordStrength < 10) {
      setSecurityBarColor('black');
    } else if (passwordStrength <= 30) {
      setSecurityBarColor('red');
    } else if (passwordStrength <= 55) {
      setSecurityBarColor('orange');
    } else if (passwordStrength <= 80) {
      setSecurityBarColor('yellow');
    } else if (passwordStrength <= 90) {
      setSecurityBarColor('green');
    } else {
      setSecurityBarColor('lime')
    }

    setSecurityBarWidth(passwordStrength);
  }, [passwordStrength]);

  return (
    <body>
      <main>
        <Header />

        <PasswordBox
          password={password}
          handleCopy={handleCopy}
          generatePassword={generatePassword}
          handleShowLabel={handleShowLabel}
          securityBarWidth={securityBarWidth}
          securityBarColor={securityBarColor}
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
