import React, { useState } from "react";
import FileUploadPage from "../PostFile";
import Header from "../Header";
import Navbar from "../Navbar";
import { createClient } from "pexels";
import { Link } from "react-router-dom";
import "./home.css"

function Home() {
  const [imageUrls, setImageUrls] = useState([]);

  async function handleFilterChange(newFilter, photos) {
    try {
      const client = createClient(
        "NqYb6lacRmDLsyN6i31xRcr842G3d9GEKdJ7ywSjq7Amx7WftErRwZHw"
      );
      const query = JSON.stringify(newFilter.search);
      console.log(query);
      const response = await client.photos.search({ query, per_page: 10 });
      const photos = response.photos;
      const urls = photos.map((photo) => photo.src.large);
      setImageUrls(urls);
    } catch (error) {
      console.error(error);
    }
  }
  const renderImages = () => {
    return imageUrls.map((url) => (
      <div className="col-md-4 pexels" key={url}>
        <img src={url} alt=""/>
      </div>
    ));
  };
  return (
    <>
      <Header onSubmit={handleFilterChange} />
      <Navbar />
      <FileUploadPage />
      <div className="row">{renderImages()}</div>
    </>
  );
}
export default Home;
