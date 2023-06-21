import React from "react";
import "../style/Search.css";
import { NavLink } from "react-router-dom";

function Search() {
  const SearchItem = (e) => {
    let value = e.target.value.trim().toLowerCase();
  };
  return (
    <>
      <div className="backg container-fluid">
        <nav className=" container navbar d-flex ">
          <NavLink to="/">
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
        </nav>
      </div>
      <div className="background">
        <div>
          <div className="login container-fluid">
            <NavLink to="/Login">
              <button className="btn btn-dark btn-lg">
                <h2>Log in</h2>
              </button>
            </NavLink>
            <NavLink to="/Registration">
              <button className="ms-1 btn btn-success btn-lg">
                <h2>Sign Up</h2>
              </button>
            </NavLink>
          </div>
          <div className="row photo_sample">
            <div className="col-md-3  col-sm-12 card">
              <img src="../asset/goc.jpg" alt="" className="card-img-top"/>
              <h4 className="text-center card-title pt-2">Ảnh Gốc</h4>
            </div>
            <div className="col-md-3 ms-3 col-sm-12 card p-3">
              <img src="../asset/bacnkground.jpg" alt="" className="card-img-top "/>
              <h4 className="text-center card-title pt-2">Ảnh Back Ground</h4>
            </div>
            <div className="col-md-3  ms-3 col-sm-12 card">
              <img src="../asset/image.jpg" alt="" className="card-img-top" />
              <h4 className="text-center card-title pt-2">Ảnh Hoàn Thiện</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
