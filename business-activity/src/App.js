import * as React from "react";
import BusinessForUsers from "./components/Business";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails";
import UserFormDetails from "./components/UserFormDetails";
import Admin from './components/ManagerActive'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditService from "./components/EditService";
import AddService from "./components/AddService";


function App() {
  
let theme = createTheme();
theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#edcf3f",
      light: "#f7eec2",
      dark: "#b5ac81",
    },
  },
});
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<BusinessForUsers />} />
          <Route path='' element={<BusinessForUsers />} />
          <Route path='/BusinessDetails' element={<BusinessDetails />} />
          <Route path='/UserFormDetails' element={<UserFormDetails/>}/>
          <Route path='/BusinessDetails/UserFormDetails' element={<UserFormDetails/>}/>
          <Route path='/managerlogIn/admin' element={<Admin/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/editServices/Admin' element={<Admin/>}/>
          <Route path='/addService/Admin' element={<Admin/>}/>
          <Route path='/editServices' element={<EditService/>}/>
          <Route path='/addService' element={<AddService/>}/>
        </Routes>
      </Router>     
    </div>
    </ThemeProvider>
  );
}

export default App;
