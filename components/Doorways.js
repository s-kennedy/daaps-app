import Doorway from './Doorway'
import Background from './Background'

class Doorways extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onSelect, onCancel } = this.props;
    return(
      <div className="w-full h-full pt-20 sm:mt-20 sm:pt-0 sm:overflow-x-auto relative flex parallax">
          <div className="flex relative">
            <div className="parallax-layer app-background parallax-layer-back flex flex-grow w-full h-full absolute overflow-hidden">
            </div>
            <div className="flex parallax-layer parallax-layer-base">
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
    )
  }
}

export default Doorways