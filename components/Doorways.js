import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Doorway from './Doorway'

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

const Doorways = ({ onClick }) => {
  return (
    <div className="w-full h-2/4 flex">
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
    </div>
  )
}

export default Doorways