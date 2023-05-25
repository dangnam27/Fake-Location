import * as React from "react";

import Search from "./component/Search";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { Route, Routes } from "react-router-dom";
import LandScape from "./component/LandScape";
function App() {
  return (
    <>
    
      <Search/>
      <Navbar/>
      <Routes>
          <Route path="/" element={ <Products/>}></Route>
          {/* <Route path="/Navbar" element={ <Navbar/>}></Route> */}
          <Route path="/LandScape" element={ <LandScape/>}/>
      </Routes>
    </>
   
  );
}

export default App;
