import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter"

function ShoppingList({ items }) {

  let [selectedCategory, setSelectedCategory] = useState("All");
  let newItems = [...items]

  let itemsToDisplay = newItems.filter((item) => {
      if (selectedCategory === "All") {return true}
      else {
      return item.category === selectedCategory;
      }
    });

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter setCategoryChange={handleCategoryChange}/>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
