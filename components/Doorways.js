// import { createRef } from 'React'
import Doorway from './Doorway'
import Background from './Background'

class Doorways extends React.Component {
  constructor(props) {
    super(props);
    // this.doorwaysRef = createRef()
  }

  scrollAhead = () => {
    var x = this.doorwaysRef.current.scrollLeft;
    $(window).scrollTop(y+150);
    this.doorwaysRef.current
  }

  render() {
    const { onSelect, onCancel } = this.props;

    return(
      <div className="flex-grow flex justify-start items-start sm:overflow-x-auto relative">
        <div className="scroll-arrow z-20 fancy-btn">Scroll</div>
        <div className="doorways w-full h-full sm:overflow-x-auto relative flex">
          <div className="flex relative">
            <div className="flex flex-grow w-full h-full absolute overflow-hidden">
              <Background />
              <Background />
              <Background />
            </div>
            <div className="flex">
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