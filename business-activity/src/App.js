import * as React from "react";
import BusinessForUsers from "./components/Business";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails";
import UserFormDetails from "./components/UserFormDetails";

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<BusinessForUsers />} />
          <Route path='/BusinessDetails' element={<BusinessDetails />} />
          <Route path='/UserFormDetails' element={<UserFormDetails/>}/>
        </Routes>
      </Router>     
    </div>
   </>
  );
}

export default App;
