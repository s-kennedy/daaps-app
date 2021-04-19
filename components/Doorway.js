import { useState } from 'react'

const Doorway = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(true)
    onClick()
  }

  return (
    <div className="doorway-outer">
      <button className={`${clicked ? 'doorway clicked' : 'doorway'}`} aria-label="Click to open a random prompt" onClick={handleClick}>
        <div className="background" />
        <div className="foreground" />
        <div className="depth" />
      </button>
    </div>
  )
}

export default Doorway