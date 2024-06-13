import React from "react";
import AllProductView from "./views/AllProductView";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Router>
        <Routes>
          <Route path="/" element={<AllProductView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
