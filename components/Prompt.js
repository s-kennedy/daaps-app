import ReactMarkdown from 'react-markdown'

const Prompt = ({ prompt, handleNext, handleBack }) => {
  return (
    <div className="relative bg-black text-white rounded-md border border-gray-800 h-full w-full sm:h-3/5 sm:min-h-96 sm:max-w-xs">
      <div className="p-10 flex flex-col justify-between overflow-auto h-full">
        <div className="mb-5">
          { prompt.title && <h2 className="mb-6 pb-4 border-b border-green-200 font-serif">{prompt.title}</h2>}
          <ReactMarkdown className="mb-6 font-sans">{prompt.prompt}</ReactMarkdown>
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

export default Prompt
