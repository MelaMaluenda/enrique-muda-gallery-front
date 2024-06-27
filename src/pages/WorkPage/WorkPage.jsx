import WorkPageStyled from "./WorkPageStyled";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WorkPage = () => {
  const [t] = useTranslation("home");

  return (
    <WorkPageStyled>
      <ul className="menu--work">
        <li className="menu--work__title">
          <Link aria-label="sydney" to="/Sydney">
            {t("work.project1")}
          </Link>
        </li>
        <li className="menu--work__title">
          <Link aria-label="split" to="/">
            {t("work.project2")}
          </Link>
        </li>
        <li className="menu--work__title">
          <Link aria-label="portraits" to="/">
            {t("work.project3")}
          </Link>
        </li>
        <li className="menu--work__title">
          <Link aria-label="landscapes" to="/">
            {t("work.project4")}
          </Link>
        </li>
      </ul>
    </WorkPageStyled>
  );
};

export default WorkPage;
