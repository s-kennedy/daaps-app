import ReactMarkdown from 'react-markdown'
import AriaModal from 'react-aria-modal'

const Prompt = ({ prompt, onCancel, closed }) => {
  const content = prompt.fields
  const number = prompt.index + 1

  return (
    <AriaModal titleText={`Prompt #${number}`} onExit={onCancel}>
      <div className={`backdrop fixed inset-y-0 inset-x-0 h-screen w-screen bg-black flex justify-center items-center prompt ${closed ? 'closed' : 'open'}`}>
        <div className={`bg-green text-white h-full w-full overflow-auto card`}>
          <div className="bg-pink text-green rounded-b-full content">
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
      </div>
    </AriaModal>
  )
}

export default Prompt
