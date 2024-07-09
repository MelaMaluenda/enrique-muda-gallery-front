import FooterStyled from "./FooterSyled";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation("translation");

  return (
    <FooterStyled>
      <div className="footer">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <NavLink aria-label="work" to="/work">
              {t("navigation.menu-work")}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <NavLink aria-label="bio" to="/bio">
              {t("navigation.menu-bio")}
            </NavLink>
          </li>
          <li className="footer__menu-item">
            <a href="https://www.instagram.com/enriquemuda/" target="_blank">
              <img
                src="images/instagram.png"
                alt="Instagram Enrique Muda"
                className="image"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className="footer__menu-item">
            <a
              href="https://fuga.gallery/sydney-postcards-esp/"
              target="_blank"
            >
              Fuga.Gallery
            </a>
          </li>
        </ul>
        <div className="footer__author">
          <h5>&copy; Enrique Muda 2024</h5>
          <h5>enriquemudabull@gmail.com</h5>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
