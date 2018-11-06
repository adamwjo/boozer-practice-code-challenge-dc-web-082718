import React from 'react'

const CocktailDisplay = (props) => {
  // debugger;



  let items = []
  for (let i = 0; i < props.currentCocktail.coctailProportion.length; i++) {
    items.push(<li>{props.currentCocktail.coctailProportion[i].amount} {props.currentCocktail.coctailIngredients[i].name}</li>);
  }

  return (
    <div id="cocktail-display">
      <h1>{props.currentCocktail.name}</h1>
      <p>{props.currentCocktail.description}</p>
      <p>{props.currentCocktail.instructions}</p>
      <p><ul>{
        items
      }</ul></p>
      </div>
  )
}

export default CocktailDisplay
