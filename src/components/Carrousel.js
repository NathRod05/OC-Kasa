import React, { useState } from 'react'
import '../style/carrousel.css'

function Carrousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? pictures.length - 1 : currentSlide - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1)
  }

  return (
    <div className="contenair">
      {pictures.length >= 2 ? (
        <i
          className="fa-solid fa-chevron-left left-arrow"
          onClick={prevSlide}
        ></i>
      ) : null}
      <img className="pictures" src={pictures[currentSlide]} alt="#" />
      {pictures.length >= 2 ? (
        <p className="scale">
          {currentSlide + 1}/{pictures.length}
        </p>
      ) : null}
      {pictures.length >= 2 ? (
        <i
          className="fa-solid fa-chevron-right right-arrow"
          onClick={nextSlide}
        ></i>
      ) : null}
    </div>
  )
}

export default Carrousel
