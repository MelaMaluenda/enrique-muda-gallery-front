import { useState } from "react";
import { useTranslation } from "react-i18next";
import BigCarousel from "../../../components/BigCarousel/BigCarousel";
import SmallCarousel from "../../../components/SmallCarousel/SmallCarousel";
import CarouselStyled from "../CarouselStyled";
import Footer from "../../../components/Footer/Footer";

const images = [
  "images/sydney1.jpg",
  "images/sydney2.jpg",
  "images/sydney3.jpg",
  "images/sydney4.jpg",
  "images/sydney5.jpg",
  "images/sydney6.jpg",
  "images/sydney7.jpg",
  "images/sydney8.jpg",
  "images/sydney9.jpg",
  "images/sydney10.jpg",
];

const SydneyPostcards = () => {
  const [t] = useTranslation("home");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CarouselStyled>
      <div className="sydney">
        <article className="sydney__carousel">
          <BigCarousel
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
          <SmallCarousel
            images={images}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </article>
        <article className="sydney__explanation">
          <h3 className="sydney__explanation--title">{t("sydney.title")}</h3>
          <h4 className="sydney__explanation--title">{t("sydney.year")}</h4>
          <div className="sydney__text">
            <p className="sydney__text--p">{t("sydney.p1")}</p>
            <p className="sydney__text--p">{t("sydney.p2")}</p>
            <p className="sydney__text--p">{t("sydney.p3")}</p>
            <p className="sydney__text--p">{t("sydney.p4")}</p>
            <p className="sydney__text--p">{t("sydney.p5")}</p>
          </div>
          <span className="sydney__text--span">{t("sydney.author")}</span>
        </article>
        <article className="sydney__opening">
          <h4 className="sydney__opening--title">{t("sydney.opening")}</h4>
          <div className="sydney__opening--photos">
            <img
              className="sydney__opening--images"
              src="images/1.jpg"
              alt="Exposition gallery"
              width={200}
              height={200}
            />
            <img
              className="sydney__opening--images"
              src="images/2.jpg"
              alt="Exposition gallery with a projector"
              width={200}
              height={200}
            />
          </div>
        </article>
      </div>
      <Footer />
    </CarouselStyled>
  );
};

export default SydneyPostcards;
