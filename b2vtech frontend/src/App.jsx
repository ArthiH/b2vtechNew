import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home-page/Home";
import { Login } from "./pages/RL-pages/Login";
import { Register } from "./pages/RL-pages/Register";
import { FP, FPC, Forgot, OTP } from "./pages/RL-pages/Forgot";
import { Intern } from "./pages/RL-pages/internship_page/IP";
import { Internship } from "./pages/internship/Internship";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { AccountSetting } from "./pages/accountSetting/AccountSetting";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/forgot" Component={Forgot}>
          <Route index element={<FP />} />
          <Route path="otp" element={<OTP />} />
          <Route path="fpc" element={<FPC />} />
        </Route>
        <Route path="/intern" Component={Intern} />
        <Route path="/internship" Component={Internship} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/account" Component={AccountSetting} />
      </Routes>
    </>
  );
};
