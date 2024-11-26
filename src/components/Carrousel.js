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
      <i
        className="fa-solid fa-chevron-left left-arrow"
        onClick={prevSlide}
      ></i>
      <img className="pictures" src={pictures[currentSlide]} alt="#" />
      <i
        className="fa-solid fa-chevron-right right-arrow"
        onClick={nextSlide}
      ></i>
    </div>
  )
}

export default Carrousel
