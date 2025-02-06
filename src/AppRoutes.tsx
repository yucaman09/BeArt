import { Route, Routes } from "react-router-dom";
import BeartRoutes from "./pages/BeartRoutes";
import LoginPage from "./auth/pages/LoginPage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<BeartRoutes />}></Route>
      </Routes>
    </>
  );
};
