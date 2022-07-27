import * as React from "react";
import BusinessForUsers from "./components/Business";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails";
import UserFormDetails from "./components/UserFormDetails";
import ManagerLogIn from "./components/ManagerLogin";
import Admin from "./components/ManagerActive";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<BusinessForUsers />} />
          <Route path='' element={<BusinessForUsers />} />
          <Route path='/BusinessDetails' element={<BusinessDetails />} />
          <Route path='/UserFormDetails' element={<UserFormDetails/>}/>
          <Route path='/BusinessDetails/UserFormDetails' element={<UserFormDetails/>}/>
          <Route path='/managerlogIn' element={<ManagerLogIn/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
