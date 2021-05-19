import { createRef } from 'react'
import Doorway from './Doorway'
import Background from './Background'
import ScrollArrow from './ScrollArrow'

class Doorways extends React.Component {
  constructor(props) {
    super(props);
    this.doorwaysRef = createRef()
    this.state = { mounted: false }
  }

  componentDidUpdate() {
    if (!this.state.mounted) {
      this.setState({ mounted: true })
    }
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
        <div className="scroll-btn-container hidden sm:flex">
          <button className="scroll-btn z-20 border border-green transition-all" onClick={this.scrollAhead}>
            <span className="mr-1">Scroll</span>
            <div className="scroll-arrow-icon">
              <img src="/images/scroll-arrow.svg" alt="arrow right" />
            </div>
          </button>
        </div>
        <div className="doorways w-full h-full sm:overflow-x-auto relative flex bg-green" ref={this.doorwaysRef}>
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
            <div className="w-full h-full absolute overflow-hidden app-background" />
          </div>
        </div>
      </div>
    )
  }
}

export default Doorways