import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";

export const App = () => {
  return <BrowserRouter>
    <Routes>
      {routes.map(({path, Element}) => <Route key={path} element={Element} path={path}/>)}
    </Routes>
  </BrowserRouter>
};
