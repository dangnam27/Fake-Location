import React from 'react';

function ImagePage(props) {
  return (
    <div>
      <img src={props.image} alt="Image" style={{ maxWidth: "200px" }} />
      
    </div>
  );
}

export default ImagePage;