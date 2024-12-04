import React, { useState, useRef } from 'react'
import '../style/collapse.css'

function Collapse({ title, description }) {
  const [open, setOpen] = useState(false)
  const descriptionRef = useRef()

  return (
    <div className="collapse">
      <button className="collapse__btn" onClick={() => setOpen(!open)}>
        {title}
        <i className={`fa-solid fa-chevron-${open ? 'down' : 'up'}`}></i>
      </button>
      <div
        className="description-content"
        ref={descriptionRef}
        style={
          open
            ? { height: descriptionRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

export default Collapse
