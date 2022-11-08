import react, { useState } from "react"
import ShoppingList from "./ShoppingList"

function Filter ({setCategoryChange}) {

    return (
        <select name="filter" onChange={setCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
    )
}

export default Filter