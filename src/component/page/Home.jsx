import React from "react";
import { Route, Routes } from "react-router-dom";
import FileUploadPage from "../PostFile";
import Header from "../Header";
import Navbar from "../Navbar";

function Home() {
  return (
      <>
        <FileUploadPage/>
      </>
  );
}
export default Home;
