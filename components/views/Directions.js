import { useState, useEffect } from 'react'
import Doorways from '../Doorways'
import Prompt from '../Prompt'
import InstallModal from '../InstallModal'
import { useRouter } from 'next/router'

const DirectionsView = ({ prompts, handleReadMore, showDisclaimer }) => {
  const router = useRouter()
  const [availablePrompts, setAvailablePrompts] = useState(prompts)
  const [selectedPrompt, setSelectedPrompt] = useState()
  const [closed, setClosed] = useState(true)
  const [showInstallMessage, setShowInstallMessage] = useState(false)
  const [showInstallModal, setShowInstallModal] = useState(false)

  const selectPrompt = () => {
    const selectedIndex = Math.floor(Math.random() * availablePrompts.length)
    const selectedPrompt = availablePrompts[selectedIndex];
    const remainingPrompts = availablePrompts.filter(item => item !== selectedPrompt)
    if (remainingPrompts > 0) {
      setAvailablePrompts(remainingPrompts)
    } else {
      setAvailablePrompts(prompts)
    }
    router.push({
      pathname: '/',
      query: { prompt: selectedPrompt.fields.uid },
    })
    setClosed(false)
    setSelectedPrompt(selectedPrompt)
  }

  const clearPrompt = () => {
    router.push({
      pathname: '/',
      query: {},
    })
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

  useEffect(() => {
    const query = router.query
    const promptFromQuery = prompts.find(p => p.fields.uid === parseInt(query.prompt))

    if (!showDisclaimer && !selectedPrompt && promptFromQuery) {
      setClosed(false)
      setSelectedPrompt(promptFromQuery)
    }
  }, [router, showDisclaimer])

  return (
    <>
      {showInstallMessage &&
        <div className="container mx-auto flex justify-end flex-grow-0 flex-shrink-0 z-20 absolute fade-in-slow">
          <div className="w-1/3 md:w-1/4 p-5 text-right fixed right-0 sm:right-auto">
            <button className="mb-1 text-center bg-white text-green border border-green px-2 py-1 btn" onClick={() => setShowInstallModal(true)}>Save app to phone</button>
          </div>
        </div>
      }
      {
        showInstallModal && <InstallModal handleClose={() => setShowInstallModal(false)} />
      }
      <div className={`directions-panel flex flex-col flex-grow parallax parallax-wrapper bg-white fade-in-slow`}>
        <div className="container mx-auto p-5 flex-grow flex">
          <div className="flex-grow flex justify-start items-start flex sm:overflow-x-auto">
            <div className="w-8/12 lg:w-6/12 pr-8 flex flex-col flex-grow h-full justify-between">
              <header>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-5 sm:mb-8 md:mb-10 uppercase">Directions<br /> to Nowhere Particular</h1>
                <p className="mb-5 sm:text-lg md:text-xl">Prompts for sensing, making, and navigating public space.</p>
                <p className="mb-5 sm:text-lg md:text-xl">Scroll and select one:</p>
              </header>
              <div className="sm:hidden">
                <button onClick={handleReadMore} className="mb-1 text-center bg-white text-green border border-green px-2 py-1 btn">Read more</button>
              </div>
            </div>
            <Doorways onSelect={selectPrompt} />
          </div>
        </div>
      </div>
      { selectedPrompt && <Prompt prompt={selectedPrompt} onCancel={clearPrompt} closed={closed} />}
    </>
  )
}

export default DirectionsView