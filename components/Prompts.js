import { useState } from 'react'
import Slider from "react-slick";

import Prompt from './Prompt'

export default function Prompts({ prompts }) {
  const [promptIndex, setIndex] = useState(0)

  const nextPrompt = () => {
    if (promptIndex === prompts.length - 1) {
      return setIndex(0)
    }
    setIndex(promptIndex + 1)
  }

  const prevPrompt = () => {
    if (promptIndex === 0) {
      return setIndex(prompts.length - 1)
    }
    setIndex(promptIndex - 1)
  }

  const prompt = prompts[promptIndex]

  return (
    <div>
      <Prompt prompt={prompt.fields} handleNext={nextPrompt} handleBack={prevPrompt} />
    </div>
  )
}
