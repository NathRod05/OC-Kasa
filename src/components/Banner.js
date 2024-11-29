import React from 'react'
import '../style/banner.css'

function banner({ image, accueil }) {
  return (
    <div className="banner">
      <img src={image} className="banner-img" alt="#" />
      {accueil && (
        <>
          <div className="overlay"></div>
          <h1 className="text-image">Chez vous, partout et ailleurs</h1>
        </>
      )}
    </div>
  )
}

export default banner
