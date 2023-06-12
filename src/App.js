import * as React from "react";
import Search from "./component/Search";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import FileUploadPage from "./component/PostFile";
import Registration from "./component/Registration/Registration";
function App() {
  return (
    <>
      <Search/>
      <Navbar/>
      <Routes>
          <Route path="/Navbar" element={ <Navbar/> }></Route>
          <Route path="/Registration" element={ <Registration/> }></Route>
          <Route path="/Login" element={ <Login/> }></Route>
      </Routes>
      <FileUploadPage />
    
    </>
   
  );
}

export default App;
