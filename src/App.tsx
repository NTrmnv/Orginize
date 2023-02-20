import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes/routes";
import {Wrapper} from "./components/wrapper/Wrapper";

export const App = () => {
  return <BrowserRouter>
    <Routes>
      {privateRoutes.map(({path, Element}) => <Route key={path} element={<Wrapper><Element/></Wrapper>} path={path}/>)}
      {publicRoutes.map(({path, Element}) => <Route key={path} element={<Element/>} path={path}/>)}
    </Routes>
  </BrowserRouter>
};
