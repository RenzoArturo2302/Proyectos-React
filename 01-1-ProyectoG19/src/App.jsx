import React, { useState } from "react";
import HomeView from "./views/HomeView";

import "./styles.css";

const App = () => {
  const [darkModeState, setDarkModeState] = useState(false);
  console.log(darkModeState);
  return (
    <div className="App" data-theme={darkModeState ? "darkmode" : ""}>
      <HomeView
        darkModeState={darkModeState}
        setDarkModeState={setDarkModeState}
      />
    </div>
  );
};

export default App;
