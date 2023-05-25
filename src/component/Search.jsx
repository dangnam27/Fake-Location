import React, { useState } from "react";
import "../style/Search.css";





function handlePost() {
  onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    console.log(name);
  };
}
handlePost();

// function postData(data, callback) {
//     var options = {
//         method : 'POST',
//         headers: {
//             "Content-Type": "application/json",

//           },
//         body : JSON.stringify(data)
//     };

//     fetch(dataAPI, options)
//     .then(function (response) {
//         response.json(options);
//     })
//     .then(callback);
// }
function Post() {
  return (
    <div>
      <div>
        <input type="file" name="name" accept=".jpg, .png" />
        <button onclick="handlePost ()" id="post">
          Post
        </button>
      </div>
    </div>
  );
}
function inputInfor() {
  var searchInput = document.querySelector(".search input");
  searchInput.addEventListener("input", function (e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDOM = document.querySelectAll(".product");
    listProductDOM.forEach((item) => {
      if (item.innerText.toLowerCase().includes(txtSearch)) {
        item.classList.remove("hidde");
      } else {
        item.classList.add("hidde");
      }
    });
  });
}
// inputInfor();

function Search(props) {
  return (
    <div className="backg">
      <nav class=" container navbar d-flex ">
        <div class="search">
          <form className="d-flex">
            <button className="button">
              
              <i class="fa-solid fa-magnifying-glass p-1"></i>
            </button>
            <input
              className="form-control"
              id="Search"
              type="search"
              placeholder="Tìm kiếm thứ bạn thích"
              aria-label="Search"
            />
          </form>
        </div>
        <Post />
      </nav>
     
    </div>
  );
}

export default Search;
