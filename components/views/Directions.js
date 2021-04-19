import { useState } from 'react'
import Doorways from '../Doorways'
import Prompt from '../Prompt'


const DirectionsView = ({ prompts, handleReadMore }) => {
  const [availablePrompts, setAvailablePrompts] = useState(prompts)
  const [selectedPrompt, setSelectedPrompt] = useState()
  const [closed, setClosed] = useState()

  const selectPrompt = (e) => {
    const selectedIndex = Math.floor(Math.random() * availablePrompts.length)
    const selectedPrompt = availablePrompts[selectedIndex];
    const remainingPrompts = availablePrompts.filter(item => item !== selectedPrompt)
    if (remainingPrompts > 0) {
      setAvailablePrompts(remainingPrompts)
    } else {
      setAvailablePrompts(prompts)
    }
    setSelectedPrompt(selectedPrompt)
  }

  const clearPrompt = () => {
    setClosed(true)
    setTimeout(() => {
      setSelectedPrompt(null)
      setClosed(null)
    }, 1000)
  }

  return (
    <>
      <div className={`directions-panel bg-yellow flex flex-col h-full ${selectedPrompt ? 'selected' : '' }`}>
        <div className="fixed grid grid-cols-4 container mx-auto p-5 flex-grow-0 flex-shrink-0">
          <div className="col-span-1 col-start-4">
            <p className="mb-1 text-right">Bookmark it for later</p>
          </div>
        </div>
        <div className="container mx-auto p-5 flex-grow">
          <div className="h-full flex sm:flex-col justify-start items-start flex overflow-x-auto">
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
            className="bg-white px-2 py-1 border border-green"
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