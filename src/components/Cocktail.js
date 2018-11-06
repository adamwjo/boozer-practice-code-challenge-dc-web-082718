import React from 'react'

const Cocktail = (props) => {

  return (
    <li onClick={() => {props.handleDetails(props.coctailInfo)}}><a href="#">{props.coctailInfo.name}</a></li>
  )
}

export default Cocktail
