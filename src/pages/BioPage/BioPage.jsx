import BioPageStyled from "./BioPageStyled";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const BioPage = () => {
  const { t } = useTranslation("translation");

  return (
    <BioPageStyled>
      <div className="bio-content">
        <img
          src="images/eqe.jpeg"
          alt="Enrique Muda "
          className="bio__image"
          width={200}
          height={200}
        />
        <div className="bio__text">
          <p className="bio__text--p">{t("biography.p1")}</p>
          <p className="bio__text--p">{t("biography.p2")}</p>
          <p className="bio__text--p">{t("biography.p3")}</p>
          <p className="bio__text--p">{t("biography.p4")}</p>
        </div>
      </div>
      <Footer />
    </BioPageStyled>
  );
};

export default BioPage;
