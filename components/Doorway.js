import { useState, useEffect } from 'react'

const Doorway = ({ onClick, position='0% center' }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
    onClick()
  }

  return (
    <div className="doorway-outer">
      <button className={`${clicked ? 'doorway clicked' : 'doorway'}`} aria-label="Click to open a random prompt" onClick={handleClick}>
        <div className="background bg-texture" style={{ backgroundPosition: `${position}`}} />
        <div className="depth" />
        <div className="foreground" />
      </button>
    </div>
  )
}

export default Doorway