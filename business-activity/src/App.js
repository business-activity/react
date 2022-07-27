import * as React from "react";
import BusinessForUsers from "./components/Business";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails";
import UserFormDetails from "./components/UserFormDetails";
import ManagerLogIn from "./components/ManagerLogin";
import Admin from "./components/ManagerActive";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          <Route path='/managerlogIn' element={<ManagerLogIn/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>     
    </div>
    </ThemeProvider>
  );
}

export default App;
