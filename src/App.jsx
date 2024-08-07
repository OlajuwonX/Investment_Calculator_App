import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInputs from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInputs(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // the plus before the new value is to make sure the numbers are added mathematically and not just converted to a new string.
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChangeInput={handleUserInputs} />
      {!inputIsValid && (
        <p className="center">
          Please enter a duration that is greater than zero
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;

// inputIsValid is to display an error message intead of crashing when a negative or 0 duration is filled in the duration input column.
