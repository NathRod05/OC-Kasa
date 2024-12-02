import React from 'react'
import '../style/host.css'

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host-name">{name}</p>
      <img className="picture" src={picture} alt="#"></img>
    </div>
  )
}

export default Host
