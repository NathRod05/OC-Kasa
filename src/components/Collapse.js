import React, { useState } from 'react'
import '../style/collapse.css'

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="collapse" onClick={() => setOpen(!open)}>
      <button className="collapse__btn">
        {title} <i class="fa-solid fa-chevron-up"></i>
      </button>
      {open ? <ul className="descritpion">{description}</ul> : ''}
    </div>
  )
}

export default Collapse
