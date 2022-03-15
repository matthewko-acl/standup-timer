import React from "react";
import { Home } from "./pages/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}