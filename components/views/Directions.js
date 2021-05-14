import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Doorways from '../Doorways'
import Prompt from '../Prompt'
import InstallModal from '../InstallModal'
import { useRouter } from 'next/router'
import Sundial from '../Sundial'

const LoadingTitle = () => (<h1 className="text-2xl sm:text-4xl md:text-5xl mb-5 sm:mb-8 md:mb-10 uppercase font-serif">Directions to <br />Nowhere in Particular</h1>)

const SplitTitle = dynamic(
  () => import('../SplitTitle'),
  {
    ssr: false,
    loading: () => <LoadingTitle />
  }
)

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

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
          <div className="w-1/3 sm:w-1/6 p-5 text-right fixed right-0 sm:right-auto">
            <button className="mb-1 text-center bg-white text-green border border-green px-2 py-1 btn" onClick={() => setShowInstallModal(true)}>Save app to phone</button>
          </div>
        </div>
      }
      {
        showInstallModal && <InstallModal handleClose={() => setShowInstallModal(false)} />
      }
      <div className={`directions-panel w-full`}>
        <div className="flex flex-col flex-grow bg-white h-full">
          <div className="container mx-auto p-5 flex-grow flex flex-col">
            <div className="w-2/3 sm:5/6">
              <SplitTitle />
              <p className="mb-3 sm:mb-5 text-lg md:text-2xl hidden sm:block">Prompts for sensing, making, and navigating public space.</p>
            </div>
            <div className="flex flex-grow overflow-x-auto">
              <div className="w-1/2 flex flex-grow flex-shrink-0 flex-col justify-between mr-2 sm:hidden">
                <div>
                  <p className="mb-3 text-lg md:text-2xl">Prompts for sensing, making, and navigating public space.</p>
                  <p className="mb-3 text-lg md:text-2xl">Scroll and select one.</p>
                </div>
                <div className="mb-3 sm:hidden">
                  <button className="inline mb-1 text-center bg-white text-green border border-green px-2 py-1 btn" onClick={handleReadMore}>Read more </button>
                </div>
              </div>
              <Doorways onSelect={selectPrompt} />
            </div>
          </div>
        </div>
      </div>
      { selectedPrompt && <Prompt prompt={selectedPrompt} onCancel={clearPrompt} closed={closed} />}
    </>
  )
}

export default DirectionsView