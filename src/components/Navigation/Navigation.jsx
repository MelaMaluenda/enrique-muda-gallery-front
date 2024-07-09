import NavigationStyled from "./NavigationStyled";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [t] = useTranslation("translation");

  return (
    <NavigationStyled>
      <ul className="menu">
        <li className="menu__work">
          <NavLink aria-label="work" to="/work">
            {t("navigation.menu-work")}
          </NavLink>
        </li>
        <span> / </span>
        <li className="menu__bio">
          <NavLink aria-label="bio" to="/bio">
            {t("navigation.menu-bio")}
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
