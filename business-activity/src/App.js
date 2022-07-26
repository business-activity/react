import * as React from "react";
import BusinessForUsers from "./components/Business";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BusinessForUsers />} />
          {/* <Route path="/BusinessDetails" element={<BusinessDetails/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
