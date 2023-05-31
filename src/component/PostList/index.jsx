import React, { useState } from "react";
import PropTypes from "prop-types";
// import Base64Image from './Base64Image';
import axios from "axios";
import { Link } from "react-router-dom";
import Cart from "../Cart";

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;


 
  return (
    <>
      {posts &&
        posts.map((post, index) => {
          return (

            <div className="card h-100 text-center" key={post.id}>
              <Link to="./Cart">
              <img
                src={post.image}
                className="card-img-top card-body"
                alt="Loading..."
                height="150px"
              />
              </Link>
          
 
              <div className="card-body">
                <p className="card-text lead fw-bold">{post.name}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default PostList;