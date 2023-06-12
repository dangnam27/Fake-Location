import React from "react";
import Search from "./component/Search";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import FileUploadPage from "./component/PostFile";

function Home() {
  return (
    <div>
      return (
      <>
        <Search />
        <Navbar />
        <Routes>
          <Route path="/Navbar" element={<Navbar />}></Route>
        </Routes>
        <FileUploadPage />
      </>
      );
    </div>
  );
}

export default Home;
