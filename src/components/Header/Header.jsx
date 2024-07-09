import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <HeaderStyled className="head">
      <div className="head__left">
        <Link aria-label="home" to="/home">
          <h2>{t("navigation.name")}</h2>
        </Link>
      </div>
      <div className="head__right">
        <Navigation />
        <button
          className="button--lang"
          onClick={() => i18n.changeLanguage("es")}
        >
          ESP
        </button>
        <button
          className="button--lang"
          onClick={() => i18n.changeLanguage("en")}
        >
          ENG
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
