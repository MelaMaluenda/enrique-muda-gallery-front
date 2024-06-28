import { useState } from "react";
import { useTranslation } from "react-i18next";
import BigCarousel from "../../../components/BigCarousel/BigCarousel";
import SmallCarousel from "../../../components/SmallCarousel/SmallCarousel";
import CarouselStyled from "../CarouselStyled";
import Footer from "../../../components/Footer/Footer";

const images = [
  "images/split/split1.jpg",
  "images/split/split2.jpg",
  "images/split/split3.jpg",
  "images/split/split4.jpg",
  "images/split/split5.jpg",
  "images/split/split6.jpg",
  "images/split/split7.jpg",
  "images/split/split8.jpg",
  "images/split/split9.jpg",
  "images/split/split10.jpg",
];

const Split = () => {
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
          <h3 className="sydney__explanation--title">{t("split.title")}</h3>
          <h4 className="sydney__explanation--title">{t("split.year")}</h4>
          <div className="sydney__text">
            <p className="sydney__text--p">{t("split.p1")}</p>
            <p className="sydney__text--p">{t("split.p2")}</p>
            <p className="sydney__text--p">{t("split.p3")}</p>
            <p className="sydney__text--p">{t("split.p4")}</p>
            <p className="sydney__text--p">{t("split.p5")}</p>
          </div>
        </article>
      </div>
      <Footer />
    </CarouselStyled>
  );
};

export default Split;
