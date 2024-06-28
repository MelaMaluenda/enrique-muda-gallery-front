import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SmallCarouselStyled from "./SmallCarouselStyled";

const SmallCarousel = ({ images, activeIndex, setActiveIndex }) => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 8));

  useEffect(() => {
    const start = Math.max(0, activeIndex - 4);
    const end = Math.min(images.length, start + 8);
    setVisibleImages(images.slice(start, end));
  }, [activeIndex, images]);

  const getOrientationClass = (imgUrl) => {
    const img = new Image();
    img.src = imgUrl;
    const isVertical = img.height > img.width;
    return isVertical ? "thumbnail--vertical" : "thumbnail--horizontal";
  };

  return (
    <SmallCarouselStyled>
      <div className="thumbnailsContainer">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${getOrientationClass(img)} ${index + Math.max(0, activeIndex - 4) === activeIndex ? "thumbnail--active" : ""}`}
            onClick={() => setActiveIndex(index + Math.max(0, activeIndex - 4))}
          />
        ))}
      </div>
    </SmallCarouselStyled>
  );
};

SmallCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};

export default SmallCarousel;
