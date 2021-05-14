import React from 'react'
import ReactMarkdown from 'react-markdown'
import AriaModal from 'react-aria-modal'
import Parallax from 'parallax-js'
import breaks from 'remark-breaks'

const categories = ['make', 'sense', 'seek', 'care']

const unescape = text => text.replace(/\\/g, '')

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.scene = React.createRef();
  }

  componentDidMount() {
    this.parallax = new Parallax(this.scene.current)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }

  render () {
    const { prompt, onCancel, closed } = this.props
    const content = prompt.fields
    const number = content.uid
    const category = content.category ? content.category : categories[content.uid % 4]

    return (
      <AriaModal titleText={`Prompt #${number}`} onExit={onCancel} focusDialog={true} focusTrapOptions={{returnFocusOnDeactivate: false}}>
        <div className={`overflow-hidden backdrop absolute inset-0 h-screen w-screen bg-black flex justify-center items-center prompt ${closed ? 'closed' : 'open'}`}>
          <div className={`h-full w-full overflow-hidden card-container relative bg-${category}`}>
            <div className="absolute h-full w-full inset-y-0 inset-x-0 card bg-white" />
            <div className={`absolute h-full w-full inset-y-0 inset-x-0 card-bg`} ref={this.scene}>
              <div className="bg-a h-full w-full absolute" data-depth="0.20" />
              <div className="bg-b h-full w-full absolute" data-depth="0.40" />
              <div className="bg-c h-full w-full absolute" data-depth="0.60" />
              <div className="bg-d h-full w-full absolute" data-depth="0.80" />
            </div>
            <div className="content p-2 absolute flex flex-col flex-grow h-full w-full justify-between">
              <header className="p-5">
                <div className="text-green card-number">{number}</div>
                { content.title && <h2 className="text-2xl mb-2 text-green card-title">{content.title}</h2>}
              </header>
              <main className="px-14 flex-grow overflow-auto">
                <ReactMarkdown className="mb-12 font-sans text-lg whitespace-pre-wrap">{unescape(content.prompt)}</ReactMarkdown>
                { content['help text'] &&
                  <div className="mb-5">
                    <div className="flex align-center text-green">
                      <span className="font-serif text-green text-2xl mr-1">*</span>
                      <ReactMarkdown className="whitespace-pre-wrap">{unescape(content['help text'])}</ReactMarkdown>
                    </div>
                  </div>
                }
              </main>
              <div className="p-5 flex flex-col justify-center items-center overflow-auto">
                <div className="flex justify-center my-5">
                  <button className="bg-white px-4 py-2 border text-green border-green fancy-btn" onClick={onCancel}>EXIT</button>
                </div>
                <p>#DirectionsToNowhere</p>
              </div>
            </div>
          </div>
        </div>
      </AriaModal>
    )
  }
}

export default Prompt
