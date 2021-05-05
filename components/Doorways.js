import Doorway from './Doorway'

class Doorways extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onSelect, onCancel } = this.props;
    return(
      <div className="w-full h-full pt-20 sm:pt-0 sm:overflow-x-auto relative flex">
        <div className="flex relative app-background">
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
    )
  }
}

export default Doorways