import img from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={img} alt="investment calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

// the two {dots} (..) before the /assets is to show that were going one level outside the components folder where we're writing the header component.
// check the css for props (classes, classNames and Ids) to be able to follow the styling.
