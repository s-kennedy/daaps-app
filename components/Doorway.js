import { useState, useEffect } from 'react'

const Doorway = ({ onClick, tabbable=false }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
    onClick()
  }

  if (tabbable) {
    return (
      <div
        tabIndex="0"
        role="button"
        className={`${clicked ? 'doorway clicked' : 'doorway'}`}
        aria-label="Click to open a random prompt"
        onClick={handleClick}
      />
    )
  }

  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`${clicked ? 'doorway clicked' : 'doorway'}`}
      aria-label="Click to open a random prompt"
      onClick={handleClick}
    />
  )

}

export default Doorway