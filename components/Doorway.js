import { useState, useEffect } from 'react'
import Eye from './Eye'

const Doorway = ({ onClick, tabbable=false }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
    onClick()
  }

  if (tabbable) {
    return (
      <button
        className={`${clicked ? 'doorway clicked' : 'doorway'}`}
        aria-label="Click to open a random prompt"
        onClick={handleClick}
      >
        <div className="doorway-content">
          <div className="flex flex-col justify-center items-center">
            <div className="font-serif mb-5 text-green">Click to enter</div>
            <Eye />
          </div>
        </div>
      </button>
    )
  }

  return (
    <button
      tabIndex="-1"
      aria-hidden="true"
      className={`${clicked ? 'doorway clicked' : 'doorway'}`}
      aria-label="Click to open a random prompt"
      onClick={handleClick}
    >
      <div className="doorway-content">
        <div className="flex flex-col justify-center items-center">
          <div className="font-serif mb-5 text-green">Click to enter</div>
          <Eye />
        </div>
      </div>
    </button>
  )

}

export default Doorway