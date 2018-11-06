import React, { Component } from 'react'
import Cocktail from './Cocktail'

class CocktailsList extends Component {

  render(){
    return (
      <div id="cocktail-list" className="scrollable">
        {this.props.coctails.map(coctail => {
          return <Cocktail coctailInfo={coctail} key={coctail.id} handleClick={this.props.handleClick}
            handleDetails={this.props.handleDetails}/>

        })}
      </div>
    )
  }
}

export default CocktailsList
