import { createRef } from 'react'
import Doorway from './Doorway'
import Background from './Background'
import ScrollArrow from './ScrollArrow'

class Doorways extends React.Component {
  constructor(props) {
    super(props);
    this.doorwaysRef = createRef()
  }

  scrollAhead = () => {
    const newScrollPosition = this.doorwaysRef.current.scrollLeft + this.doorwaysRef.current.offsetWidth
    if (newScrollPosition >= this.doorwaysRef.current.scrollWidth) {
      this.doorwaysRef.current.scrollLeft = 0
    } else {
      this.doorwaysRef.current.scrollLeft = newScrollPosition
    }
  }

  render() {
    const { onSelect, onCancel } = this.props;

    return(
      <div className="flex-grow flex justify-start items-start sm:overflow-x-auto relative">
        <div className="scroll-btn-container">
          <button className="scroll-btn z-20 fancy-btn sm:flex" onClick={this.scrollAhead}>
            <span className="hidden sm:block">Scroll</span>
            <span className="sm:hidden">Scroll right, select one.</span>
            <ScrollArrow />
          </button>
        </div>
        <div className="doorways w-full h-full sm:overflow-x-auto relative flex" ref={this.doorwaysRef}>
          <div className="flex relative">
            <div className="flex z-10">
              <Doorway onClick={onSelect} tabbable={true} />
              <Doorway onClick={onSelect} tabbable={true} />
              <Doorway onClick={onSelect} tabbable={true} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
              <Doorway onClick={onSelect} />
            </div>
            <div className="flex flex-grow w-full h-full absolute overflow-hidden">
              <Background />
              <Background />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Doorways