import React from "react";
import Routes from "./routes";

import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from "./utils/contextLib";
import Navigation from "./shared/components/navbar";
import Footer from "./shared/components/footer";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="main-div container">
        <AppContext.Provider>
                <Routes />
        </AppContext.Provider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
