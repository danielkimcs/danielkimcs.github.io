import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppContext } from "./utils/contextLib";
import Navigation from "./shared/components/navbar";
import Footer from "./shared/components/footer";
import archiveData from "./shared/archive-data";
import { Document } from 'react-pdf';

const RenderDocuments = ({documents, onDocumentLoadSuccess}) => {
  return (documents.map((doc, index) => ("numPages" in doc && doc["numPages"]) ? null :
    <div key={doc.fileName}>
      <Document
        file={{ url: require('./shared/assets/files/archive/' + doc.fileName).default }}
        onLoadSuccess={(pdf) => { onDocumentLoadSuccess(pdf, index) }}
        className="document-render">
      </Document>
    </div>
  ));
}

let numRendered = 0;

function App() {
  const [documents, setDocuments] = useState(archiveData.data);
  const [ done, setDone ] = useState(false);

  function onDocumentLoadSuccess(pdf, documentIndex) {
    // I don't understand why this works

    const { numPages } = pdf;
    let newDocuments = [...documents];

    newDocuments[documentIndex]["numPages"] = numPages;
    numRendered++;

    // Cache numPages data until every document has it
    // This way, intermediate rendering does not happen
    if (numRendered >= archiveData.data.length) {
      setDocuments(newDocuments);
      setDone(true);
    }
  }

  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <div className="main-div">
        <RenderDocuments documents={documents} onDocumentLoadSuccess={onDocumentLoadSuccess} />
        <AppContext.Provider value={{ documents, done }}>
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
