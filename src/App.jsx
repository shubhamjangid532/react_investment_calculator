import Header from "./components/Header"
import UserInputs from "./components/UserInput"
import Results from "./components/Results"
import { useState } from 'react'

function App() {
  const [ userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 12000,
    expectedReturn: 7,
    duration: 10
  })

  const inputIsvalid = userInput.duration >= 1 && userInput.expectedReturn >= 1 && userInput.annualInvestment >= 1 && userInput.duration >= 1
  const handleChange = (inputIdentifier, newValue) => {
      console.log(newValue)
        setUserInput(prevUserinput => ({...prevUserinput, [inputIdentifier]: +newValue}))
    }
console.log(userInput)
  return (
    <>
      <Header />
      <UserInputs
        userInput={userInput}
        onChange={handleChange}
      />
      {inputIsvalid ? <Results input={userInput}/>: <p className="center">Please Enter values greater than zero</p>}
    </>

  )
}

export default App
