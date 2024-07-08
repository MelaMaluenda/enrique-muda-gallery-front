import { useState } from "react";
import { useTranslation } from "react-i18next";
import BigCarousel from "../../../components/BigCarousel/BigCarousel";
import SmallCarousel from "../../../components/SmallCarousel/SmallCarousel";
import CarouselStyled from "../CarouselStyled";
import Footer from "../../../components/Footer/Footer";

const images = [
  "images/landscapes/landscapes1.jpg",
  "images/landscapes/landscapes2.jpg",
  "images/landscapes/landscapes3.jpg",
  "images/landscapes/landscapes4.jpg",
  "images/landscapes/landscapes5.jpg",
  "images/landscapes/landscapes6.jpg",
  "images/landscapes/landscapes7.jpg",
  "images/landscapes/landscapes8.jpg",
  "images/landscapes/landscapes9.jpg",
  "images/landscapes/landscapes10.jpg",
];

const Landscapes = () => {
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
          <h3 className="sydney__explanation--title">
            {t("landscapes.title")}
          </h3>
          <h4 className="sydney__explanation--title">{t("landscapes.year")}</h4>
          <div className="sydney__text">
            <p className="sydney__text--p">{t("landscapes.p1")}</p>
            <p className="sydney__text--p">{t("landscapes.p2")}</p>
            <p className="sydney__text--p">{t("landscapes.p3")}</p>
            <p className="sydney__text--p">{t("landscapes.p4")}</p>
            <p className="sydney__text--p">{t("landscapes.p5")}</p>
          </div>
        </article>
      </div>
      <Footer />
    </CarouselStyled>
  );
};

export default Landscapes;
