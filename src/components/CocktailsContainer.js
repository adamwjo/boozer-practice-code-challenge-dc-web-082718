import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

class CocktailsContainer extends Component {

  constructor(){
    super()
    this.state = {
      allCoctails: [],
      allIngredients: [],
      allProportions: [],
      currentCocktail: {
        coctailProportion: [],
        coctailIngredients: []

      }
    }
  }

  componentDidMount(){
    this.getCoctails()
    this.getIngredients()
    this.getProportions()
  }

  getCoctails = () => {
    fetch(" https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
    .then(r => r.json())
    .then(cocktails => {
      console.log(cocktails)
      this.setState({
        allCoctails: cocktails
      })
    })
  }

  getIngredients = () => {
    fetch(" https://react-boozer-backend.herokuapp.com/api/v1/ingredients")
    .then(r => r.json())
    .then(ingredients => {
      console.log(ingredients)
      this.setState({
        allIngredients: ingredients
      })
    })
  }

  getProportions = () => {
    fetch(" https://react-boozer-backend.herokuapp.com/api/v1/proportions")
    .then(r => r.json())
    .then(proportions => {
      console.log(proportions)
      this.setState({
        allProportions: proportions
      })
    })
  }


  getDetails = (cocktail) => {
    this.setState({currentCocktail: cocktail})
    let proportions = this.state.allProportions.filter(
      proportion => proportion.cocktail_id == cocktail.id
    )
    console.log(proportions)
    let ingredients = proportions.map(proportion => {
      return this.state.allIngredients.find((ingredient) =>{
        return ingredient.id == proportion.ingredient_id
      })
    })
    console.log(ingredients);
    this.setState({
      currentCocktail: {
        ...cocktail,
        coctailProportion: proportions,
        coctailIngredients: ingredients
      }
    })
  }


  render(){
    return (
      <div className="container">
        <CocktailsList coctails={this.state.allCoctails} handleClick={this.getIngredients} handleDetails={this.getDetails}/>
        <CocktailDisplay currentCocktail={this.state.currentCocktail}/>
        <Form/>
      </div>
    )
  }
}

export default CocktailsContainer
