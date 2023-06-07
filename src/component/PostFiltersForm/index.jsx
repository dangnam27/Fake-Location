import React, { useRef, useState } from "react";
import PropTypes from "prop-types";


PostFiltersForm.propTypes = {
  onsubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onsubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  

  function handleSearchTermChange(e) {
    const value = e.target.value;
   
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(()=>{
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);

    }, 2000)

    
  }
  return (
    <div>
      <div className="searchh">
        <form className="d-flex form">
          <i className="fa-solid fa-magnifying-glass p-1"></i>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="form-control"
            id="Search"
            placeholder="Tìm kiếm thứ bạn thích"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default PostFiltersForm;
