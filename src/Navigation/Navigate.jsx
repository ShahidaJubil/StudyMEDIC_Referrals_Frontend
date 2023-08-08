import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "../components/Form/Form";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/Home/Home";
import GroupDashboard from "../components/dashboard/GroupDashboard";
import ReferralPage from "../components/ReferralPage/ReferralPage";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import ReferralDetails from "../Admin/ReferralDetails";
import ForgotPassword from "../components/login/ForgotPassword";
import ReferralForm from "../components/ReferralPage/ReferralForm";

function Navigate() {
  return (
    <Router>
      <div>
        <Routes>
        <Route exact path="/admin/referrals" element={<ReferralDetails />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/dashboard/:id" element={<Dashboard />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route
            exact
            path="/signup"
            element={<Signup />}
          />
          <Route exact path="/dashboard/group" element={<GroupDashboard />} />
          <Route exact path="/refer" element={<ReferralForm />} />
          <Route
            path="/refer/:userId/:referralId"
            element={<ReferralPage />}
          /> {/* navigate to referral link */}
        </Routes>
        <div></div>
      </div>
    </Router>
  );
}

export default Navigate;
