import { createRef } from 'React'
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
        <button className="scroll-arrow z-20 fancy-btn hidden sm:flex" onClick={this.scrollAhead}>
          <span>Scroll</span>
          <ScrollArrow />
        </button>
        <div className="doorways w-full h-full sm:overflow-x-auto relative flex" ref={this.doorwaysRef}>
          <div className="flex relative">
            <div className="flex flex-grow w-full h-full absolute overflow-hidden">
              <Background />
              <Background />
            </div>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Doorways