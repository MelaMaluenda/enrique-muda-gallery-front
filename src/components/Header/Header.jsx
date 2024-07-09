import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "../Language/Language";

const Header = () => {
  const { t } = useTranslation("translation");

  return (
    <HeaderStyled className="head">
      <div className="head__left">
        <Link aria-label="home" to="/home">
          <h2>{t("navigation.name")}</h2>
        </Link>
      </div>
      <div className="head__right">
        <Navigation />
        <Language />
      </div>
    </HeaderStyled>
  );
};

export default Header;
