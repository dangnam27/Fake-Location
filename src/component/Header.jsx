import React, { useState } from "react";
import "../style/Search.css";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import PropTypes from "prop-types";

Header.propTypes ={
  onSubmit: PropTypes.func,
}
Header.defaultProps = {
  onSubmit: null,
};

function Header(props) {
  const {onSubmit} = props;
  const [searchI, setSearchI] = useState('')
  const typingTimeoutRef = useRef(null)

  const SearchIterm = (e) => {

    const value = e.target.value
    setSearchI(value);
    e.preventDefault()
    if (!onSubmit) return;

    if (typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    };
    typingTimeoutRef.current =setTimeout(() => {
      const formValue = {
        search : value,
      };
      onSubmit(formValue)
    }, 300);
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
            value={searchI}
              onChange={SearchIterm}
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
