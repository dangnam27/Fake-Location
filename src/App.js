import * as React from "react";
import Search from "./component/Search";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import Home from "./component/page/Home";
function App() {
  return (
    <>
      <Search/>
      <Navbar/>
      <Routes>
          <Route path="/Home" element={ <Home /> }></Route>
          <Route path="/Navbar" element={ <Navbar/> }></Route>
          <Route path="/Registration" element={ <Registration/> }></Route>
          <Route path="/Login" element={ <Login/> }></Route>
      </Routes>
     
    </>
   
  );
}

export default App;
