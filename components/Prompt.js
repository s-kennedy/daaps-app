import ReactMarkdown from 'react-markdown'

const Prompt = ({ prompt, onCancel }) => {
  console.log(prompt)
  const content = prompt.fields
  const number = prompt.index + 1

  return (
    <div className="fixed inset-y-0 inset-x-0 bg-green text-white h-screen w-screen overflow-auto">
      <div className="bg-pink text-green rounded-b-full">
        <header className="p-5 text-2xl">
          <div className="mb-2 font-sans">{number}</div>
          { content.title && <h2 className="mb-2 font-sans">{content.title}</h2>}
        </header>
        <main className="px-16 pb-12">
          <ReactMarkdown className="mb-12 font-sans text-lg">{content.prompt}</ReactMarkdown>
          <div className="flex justify-center">
            <button className="bg-white px-2 py-1 border border-green" onClick={onCancel}>Back</button>
          </div>
        </main>
      </div>
      <div className="p-5 flex flex-col justify-center overflow-auto">
        { content['help text'] && <p className="my-5 text-center">{content['help text']}</p>}
        <p className="text-center mb-0">#DirectionsToNowhere</p>
      </div>
    </div>
  )
}

export default Prompt
