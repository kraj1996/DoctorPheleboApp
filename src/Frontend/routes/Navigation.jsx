import React  from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute, HomeRouter } from "../util/ProtectedRoute";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginAdminLte from "../Login/LoginAdminLte";
// import ForgetPassword from "../Login/ForgetPassword";
import PatientSearch from "../Components/PatientSearch";
import PatientSearchTable from "../Components/PatientSearchTable";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer autoClose={1000} pauseOnFocusLoss={false} />
        <Routes>
          {/* before login routes */}
          <Route path="/" element={<HomeRouter />}>
            <Route path="/Login" element={<LoginAdminLte />} />
            {/* <Route path="/forgotPassword" element={<ForgetPassword />} /> */}
          </Route>

          {/* after login routes */}
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/PatientSearch" element={<PatientSearch />} />
          <Route path="/PatientSearchTable" element={<PatientSearchTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
