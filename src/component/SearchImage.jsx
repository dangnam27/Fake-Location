import React, { useEffect, useState } from "react";
import "../style/SearchImage.css";
import PostFiltersForm from "./PostFiltersForm";
import PostList from "./PostList";
import axios from "axios";


function SearchImage() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      const res = await axios.get("http://14.225.7.179:8081/get_img/");
      setPostList(res.data);
    }
   
    fetchPostList();
  }, []);
  console.log(postList);

  function handleFiltersChanged(newFilters) {
    console.log("New filters", newFilters);
  }

  return (
    <>
      <div className=" contai ">
        <PostFiltersForm onSubmit={handleFiltersChanged} />
        <PostList posts={postList} />
      </div>
    </>
  );
}

export default SearchImage;
