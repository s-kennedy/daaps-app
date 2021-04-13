import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

const Doorway = () => (
  <div className="bg-white p-3 w-full h-full">
    <div className="w-full h-full rounded-t-full bg-black" />
  </div>
)

const Doorways = ({ onClick }) => {
  return (
    <div className="w-full h-2/4 flex">
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
      <Doorway onClick={onClick} />
    </div>
  )
}

export default Doorways