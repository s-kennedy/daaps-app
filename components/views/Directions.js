import { useState } from 'react'
import Doorways from '../Doorways'

const DirectionsView = ({ prompts }) => {
  const [availablePrompts, setAvailablePrompts] = useState(prompts)
  const [selectedPrompt, setSelectedPrompt] = useState()

  const selectPrompt = () => {
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
    setSelectedPrompt(null)
  }

  return (
    <div className="daaps-yellow">
      <div className="flex flex-col">
        <div className="container mx-auto p-5 flex-grow-0">
          <header className="grid grid-cols-8 gap-6">
            <div className="col-span-12">
              <h1 className="text-xl font-serif">Directions to Nowhere in Particular</h1>
            </div>
            <div className="col-span-12">
              <p className="mb-1">Prompts for sensing, making, and navigating public space.</p>
              <aside>#DirectionsToNowhere</aside>
            </div>
          </header>
        </div>
        <div className="container mx-auto p-5 flex-grow">
          <div className="relative flex justify-center items-center flex-col overflow-x-auto">
            <Doorways prompt={selectedPrompt} onSelect={selectPrompt} onCancel={clearPrompt} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DirectionsView