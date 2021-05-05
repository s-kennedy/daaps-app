import { useState, useEffect } from 'react'

const Doorway = ({ onClick, position='0% center' }) => {
  const [clicked, setClicked] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setClicked(true)
    onClick()
  }

  return (
    <button className={`${clicked ? 'doorway clicked' : 'doorway'}`} aria-label="Click to open a random prompt" onClick={handleClick}>

    </button>
  )
}

export default Doorway