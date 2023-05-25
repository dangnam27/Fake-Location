import React, { useEffect, useState } from "react";
import "../style/Search.css";
import FileUploadPage from "./PostFile";
import axios from "axios";



  const SearchItem = (e) =>{
    let value = e.target.value.trim().toLowerCase()
    console.log(value)
  }
 
function Search() {
  
  
  // var searchInput =document.querySelector('.search input')
  //  searchInput.addEventListener('input', function(e) {
  //   let txtSearch = e.target.value.trim().toLowerCase();
  //   let data = document.querySelectorAll('.product')
  //   data.forEach(item => {
  //     if (item.innertext.toLowerCase().includes(txtSearch)){
  //       item.classList.remove('hide')
  //     } else {
  //       item.classList.add('hide')
  //     }
  //   })
  //  })



  return (
    <div className="backg">
      <nav class=" container navbar d-flex ">
        <div class="search">
          <form className="d-flex">
            <button className="button">
              
              <i class="fa-solid fa-magnifying-glass p-1"></i>
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
