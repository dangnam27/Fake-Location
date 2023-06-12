import React from "react";
import "../style/Search.css";
import Login from "./Login/Login";
import { NavLink } from "react-router-dom";

function Search() {
  const SearchItem = (e) => {
    let value = e.target.value.trim().toLowerCase();
  };
  return (
    <div className="backg">
      <nav className=" container navbar d-flex ">
      <NavLink to="/Home">
      <i class="fa-sharp fa-solid fa-house fa-2xl"></i>
          </NavLink>
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
        <div>
          <NavLink to="/Login">
            <button className="btn btn-dark">Login</button>
          </NavLink>
          <NavLink to="/Registration">
            <button className="ms-1 btn btn-dark">Registration</button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Search;
