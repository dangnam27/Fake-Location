import React from "react";
import "../style/Search.css";
import { NavLink } from "react-router-dom";

function Header() {
  const SearchItem = (e) => {
    let value = e.target.value.trim().toLowerCase();
  };
  return (
    <div className="backg">
      <nav className=" container navbar d-flex ">
      <NavLink to="/Home">
      <i className="fa-sharp fa-solid fa-house fa-2xl"></i>
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
            <button className="btn btn-dark">Logout</button>
          </NavLink>
          <NavLink to="/Login">
            <button className="ms-2 btn btn-dark"><i className="fa-solid fa-user"></i></button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
export default Header;
