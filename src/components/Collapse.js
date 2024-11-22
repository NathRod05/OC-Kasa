import React, { useState } from 'react'
import '../style/collapse.css'

function Collapse({ title, description }) {
  return (
    <div className="collapse">
      <button className="collapse__btn">
        {title} <i class="fa-solid fa-chevron-up"></i>
      </button>
      <ul className="descritpion">{description}</ul>
    </div>
  )
}

export default Collapse
