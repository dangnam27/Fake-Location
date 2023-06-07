import * as React from "react";

import Search from "./component/Search";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { Route, Routes } from "react-router-dom";
import SearchImage from "./component/SearchImage";
import Cart from "./component/Cart";
import ImagePage from "./component/ImagePage";
import Login from "./component/Login/Login";
import FileUploadPage from "./component/PostFile";
function App() {
  return (
    <>
      {/* <Login/> */}
      <Search/>
      <Navbar/>
      <Routes>
          {/* <Route path="/" element={ <Products/>}></Route> */}
          <Route path="/Cart/:id" element={ <Cart/> }></Route>
      </Routes>
      <FileUploadPage />
      {/* <SearchImage/> */}
    </>
   
  );
}

export default App;
