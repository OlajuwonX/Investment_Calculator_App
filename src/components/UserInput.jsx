export default function UserInputs({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            } // the inputIdentifiers should be passed as strings, i.e ''.
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

// do not forget to check the css for the props of the various components.
// the required is to ensure that a number in filled in the input field. you can also use (required={true}), its the same thing but the former is shorter.
// the values in the useState are the initial values that will display after the state has been re-evaluated. They are all changeable.
// the handleUserInputs function handles the values for the four inputs.
/* the "setUserInput(prevUserInput => {
    return {
        ...prevUserInput,
        [inputIdentifier]: newValue
    }" is to ensure that while filling the input fields, the other data filled in the remaining input fields are not lost while refreshing new input fields. */
// using the onChange={handleUserInputs} will just call the default data passed into the various input fields.
// onChangeInput is used because the state has been lifted up.
