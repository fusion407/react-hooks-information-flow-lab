import react, { useState } from "react"
import App from "./App"

function Header({isDarkMode, onDarkModeClick}) {
  // const [isDarkMode, setIsDarkMode] = useState(false)

  // function onDarkModeClick(e) {
  //   e.preventDefault();
  //   setIsDarkMode((isDarkMode) => !isDarkMode);
  // }
    return (
      
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
              {isDarkMode ? "dark" : "light"} Mode
            </button>
        </header>
    );
}

export default Header