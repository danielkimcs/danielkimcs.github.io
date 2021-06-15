import React, { useEffect } from "react";

import Routes from "./routes";

import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppContext } from "./utils/contextLib";
import Navigation from "./shared/components/navbar";
import Footer from "./shared/components/footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <div className="main-div">
        <AppContext.Provider>
                <Routes />
        </AppContext.Provider>
      </div>
      <Footer />
    </Router>
  );
}

function ScrollToTop({ history }) {
  const { pathname } = useLocation();

  // const { parallaxController } = useController();

  useEffect(() => {
      setTimeout(() => {
          window.scrollTo(0, 0);
          setTimeout(() => {
              // parallaxController.update();
              window.scrollTo(0, 1);
          }, 100);
      }, 100);
  }, [pathname]);

  return null;
}

export default App;
