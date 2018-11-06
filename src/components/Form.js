import React, { Component } from 'react'

class Form extends Component {

  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      instructions: "",
      proportions: {
        rows: [this.row()]
      }

    }
  }

  clickHandler = () => {
    console.log("youclicked")
    this.setState({
      proportions: {
        rows: [...this.state.proportions.rows, this.row()]
      }
    })
  }

 row = () => {
    return(
      <div className="container">
        <p>Ingredient Name<br/>
          <input type="text"/>
        </p>

        <p>Quantity<br/>
          <input type="text"/>
        </p>
      </div>
    )
  }


  render(){
    return (
      <form>
        <h3>Create a Cocktail</h3>

        <p>Name</p>
        <input type="text"/>

        <p>Description</p>
        <input type="text"/>

        <p>Instructions</p>
        <input type="text"/>

        <h3>Proportions</h3>
        {this.state.proportions.rows.map(row => {
          return row
        })}

        <p><button onClick={this.clickHandler}> + </button></p>

        <input type="submit"/>
      </form>
    )
  }
}

export default Form
