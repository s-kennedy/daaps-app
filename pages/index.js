import { getPrompts } from '../utils/airtableOps'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Card = ({ prompt, handleNext, handleBack }) => {
  return (
    <div className="relative max-w-xs bg-black text-white rounded-md border border-gray-800 h-4/5 max-h-96">
      <div className="p-10 flex flex-col justify-between overflow-auto h-full">
        <div className="mb-5">
          { prompt.title && <h2 className="mb-6 pb-4 border-b border-green-200">{prompt.title}</h2>}
          <ReactMarkdown className="mb-6">{prompt.prompt}</ReactMarkdown>
          { prompt['help text'] && <small>{prompt['help text']}</small>}
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-700 px-2 py-1 rounded-md" onClick={handleBack}>Back</button>
          <button className="bg-gray-700 px-2 py-1 rounded-md" onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="absolute bottom-0 h-10 w-full bg-black"></div>
    </div>
  )
}

export default function Home({ prompts }) {
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
    <div className="relative flex justify-center items-center h-full bg-yellow-300">
      <Card key={prompt.id} prompt={prompt.fields} handleNext={nextPrompt} handleBack={prevPrompt} />
    </div>
  )
}

export async function getStaticProps(context) {
  return {
    props: { prompts: await getPrompts() }
  }
}
