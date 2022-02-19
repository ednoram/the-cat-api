import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomeContainer, NotFoundContainer } from "containers/index";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
  );
};

export default App;
