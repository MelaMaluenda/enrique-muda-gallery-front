import { useState } from "react";
import { useTranslation } from "react-i18next";
import BigCarousel from "../../../components/BigCarousel/BigCarousel";
import SmallCarousel from "../../../components/SmallCarousel/SmallCarousel";
import CarouselStyled from "../CarouselStyled";
import Footer from "../../../components/Footer/Footer";

const images = [
  "images/portraits/portraits1.jpg",
  "images/portraits/portraits2.jpg",
  "images/portraits/portraits3.jpg",
  "images/portraits/portraits4.jpg",
  "images/portraits/portraits5.jpg",
  "images/portraits/portraits6.jpg",
  "images/portraits/portraits7.jpg",
  "images/portraits/portraits8.jpg",
  "images/portraits/portraits9.jpg",
  "images/portraits/portraits10.jpg",
];

const Portraits = () => {
  const { t } = useTranslation("translation");
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
          <h3 className="sydney__explanation--title">{t("portraits.title")}</h3>
          <h4 className="sydney__explanation--title">{t("portraits.year")}</h4>
          <div className="sydney__text">
            <p className="sydney__text--p">{t("portraits.p1")}</p>
            <p className="sydney__text--p">{t("portraits.p2")}</p>
            <p className="sydney__text--p">{t("portraits.p3")}</p>
            <p className="sydney__text--p">{t("portraits.p4")}</p>
            <p className="sydney__text--p">{t("portraits.p5")}</p>
          </div>
        </article>
      </div>
      <Footer />
    </CarouselStyled>
  );
};

export default Portraits;
