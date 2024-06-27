import Header from "../Header/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AppStyled from "./AppStyled";
import WorkPage from "../../pages/WorkPage/WorkPage";
import BioPage from "../../pages/BioPage/BioPage";
import Sydney from "../../pages/Sydney/Sydney";

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/sydney" element={<Sydney />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
