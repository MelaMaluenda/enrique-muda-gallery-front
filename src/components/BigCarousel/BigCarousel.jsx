import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import BigCarouselStyled from "./BigCarouselStyled";

const BigCarousel = ({ images, activeIndex, setActiveIndex }) => {
  const containerRef = useRef(null);

  const updateCarousel = (index) => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  useEffect(() => {
    updateCarousel(activeIndex);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <BigCarouselStyled>
      <div className="carousel__container" ref={containerRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel__image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <button
        className="carousel__button carousel__button--prev"
        onClick={handlePrev}
      >
        <img src="images/left-arrow.png" alt="Next" />
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={handleNext}
      >
        <img src="images/right-arrow.png" alt="Next" />
      </button>
    </BigCarouselStyled>
  );
};

BigCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
};

export default BigCarousel;
