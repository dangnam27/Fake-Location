import React from "react";

function ImageDisplayPage(props) {
    const imageData = props.location.state.imageData;
  
    return (
      <div>
        <h1>Image Display Page</h1>
        <img src={imageData} alt="Image" style={{ maxWidth: "400px" }} />
      </div>
    );
  }