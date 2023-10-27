import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home-page/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </>
  );
};
