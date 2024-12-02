import React, { useState } from 'react'
import '../style/collapse.css'

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="collapse">
      <button className="collapse__btn" onClick={() => setOpen(!open)}>
        {title}{' '}
        <i className={`fa-solid fa-chevron-${open ? 'down' : 'up'}`}></i>
      </button>
      {open ? <ul className="descritpion">{description}</ul> : ''}
    </div>
  )
}

export default Collapse
