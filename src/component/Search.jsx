import React, { useEffect, useRef, useState } from "react";
import "../style/Search.css";
import FileUploadPage from "./PostFile";
import axios from "axios";




function Search() {
  const SearchItem = (e) =>{
    let value = e.target.value.trim().toLowerCase()
  }
  return (
    <div className="backg">
      <nav className=" container navbar d-flex ">
        <div className="search">
          <form className="d-flex">
            <button className="button">
              
              <i className="fa-solid fa-magnifying-glass p-1"></i>
            </button>
            <input
              onChange={SearchItem}
              className="form-control"
              id="Search"
              type="search"
              placeholder="Tìm kiếm thứ bạn thích"
              aria-label="Search"
            />
          </form>
        </div>
        <FileUploadPage/>
      </nav>
     
    </div>
  );
}
export default Search;
