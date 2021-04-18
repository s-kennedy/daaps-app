import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Doorway from './Doorway'
import Prompt from './Prompt'

const Doorways = ({ onSelect, onCancel, prompt }) => {
  if (prompt) {
    return <Prompt prompt={prompt} onCancel={onCancel} />
  }
  return (
    <div className="w-full h-2/4 flex">
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
  )
}

export default Doorways