import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import itemData from "../data/items";

function App() {
  let [isDarkMode, setIsDarkMode] = useState('true');

  function handleIsDarkMode(e) {
    e.preventDefault();
    setIsDarkMode((isDarkMode) => !isDarkMode);
    console.log(isDarkMode)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleIsDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}




export default App;
