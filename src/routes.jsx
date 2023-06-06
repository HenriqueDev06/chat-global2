import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/auth/index";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
