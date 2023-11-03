import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home-page/Home";
import { Login } from "./pages/RL-pages/Login";
import { Register } from "./pages/RL-pages/Register";
import { FP, FPC, Forgot, OTP } from "./pages/RL-pages/Forgot";

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
      </Routes>
    </>
  );
};
