import Doorway from './Doorway'
import Background from './Background'

class Doorways extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onSelect, onCancel } = this.props;
    return(
      <div className="w-full h-full pt-20 sm:overflow-x-auto relative flex">
          <div className="flex relative">
            <div className="flex flex-grow w-full h-full absolute overflow-hidden">
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