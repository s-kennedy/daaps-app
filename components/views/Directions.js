import { useState, useEffect } from 'react'
import Doorways from '../Doorways'
import Prompt from '../Prompt'
import InstallModal from '../InstallModal'

const DirectionsView = ({ prompts, handleReadMore }) => {
  const [availablePrompts, setAvailablePrompts] = useState(prompts)
  const [selectedPrompt, setSelectedPrompt] = useState()
  const [closed, setClosed] = useState(false)
  const [showInstallMessage, setShowInstallMessage] = useState(false)
  const [showInstallModal, setShowInstallModal] = useState(false)

  const selectPrompt = (e) => {
    const selectedIndex = Math.floor(Math.random() * availablePrompts.length)
    const selectedPrompt = availablePrompts[selectedIndex];
    const remainingPrompts = availablePrompts.filter(item => item !== selectedPrompt)
    if (remainingPrompts > 0) {
      setAvailablePrompts(remainingPrompts)
    } else {
      setAvailablePrompts(prompts)
    }
    setClosed(false)
    setSelectedPrompt(selectedPrompt)
  }

  const clearPrompt = () => {
    setClosed(true)
    setTimeout(() => {
      setSelectedPrompt(null)
    }, 1000)
  }

  useEffect(() => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod|macintosh/.test( userAgent );
    }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    // Checks if should display install popup notification:
    if (!isInStandaloneMode()) {
      setShowInstallMessage(true);
    }
  })

  return (
    <>
      <div className={`directions-panel bg-green text-white flex flex-col flex-grow ${selectedPrompt ? 'selected' : '' }`}>
        {showInstallMessage &&
          <div className="container mx-auto flex justify-end flex-grow-0 flex-shrink-0">
            <div className="w-1/3 md:w-1/4 p-5 text-right fixed right-0 sm:right-auto">
              <button className="mb-1 text-right" onClick={() => setShowInstallModal(true)}>Bookmark it for later</button>
            </div>
          </div>
        }
        {
          showInstallModal && <InstallModal handleClose={() => setShowInstallModal(false)} />
        }
        <div className="container mx-auto p-5 flex-grow flex">
          <div className="flex-grow flex sm:flex-col justify-start items-start flex overflow-x-auto">
            <header className="w-8/12 md:w-1/2 pr-8">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-5 sm:mb-8 md: mb-10 uppercase">Directions to Nowhere in Particular</h1>
              <p className="mb-5 sm:text-lg md:text-xl">Prompts for sensing, making, and navigating public space.</p>
              <p className="mb-5 sm:text-lg md:text-xl">Choose your path:</p>
            </header>
            <Doorways onSelect={selectPrompt} />
          </div>
        </div>
        <div className="container mx-auto p-5 pt-0 flex-grow-0 flex-shrink-0">
          <button
            className="bg-white text-green px-2 py-1 border border-green"
            onClick={handleReadMore}
          >
            Read more
          </button>
        </div>
      </div>
      { selectedPrompt && <Prompt prompt={selectedPrompt} onCancel={clearPrompt} closed={closed} />}
    </>
  )
}

export default DirectionsView