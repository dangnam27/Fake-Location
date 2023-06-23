import React, { useState } from "react";
import FileUploadPage from "../PostFile";
import Header from "../Header";
import Navbar from "../Navbar";
import { createClient } from "pexels";
import "./home.css";

function Home() {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  async function handleFilterChange(newFilter) {
    try {
      const client = createClient(
        "NqYb6lacRmDLsyN6i31xRcr842G3d9GEKdJ7ywSjq7Amx7WftErRwZHw"
      );
      const query = JSON.stringify(newFilter.search);
      console.log(query);
      const response = await client.photos.search({ query, per_page: 10 });
      const photos = response.photos;
      console.log(photos);
      setImageUrls(photos);
    } catch (error) {
      console.error(error);
    }
  }
  const ShowPhoto = ({ onImageClick }) => {
    return imageUrls.map((photos) => (
      <>
        <div className=" col-md-3 mb-4 col-sm-6  " key={photos.id}>
          <div className="card h-100 text-center p-4">
            <img
              src={photos.src.large}
              className="card-img-top"
              alt="#"
              height="400px"
              onClick={() => onImageClick(photos.src.large)}
            />

            <h5 className="pt-3">{photos.photographer}</h5>
          </div>
        </div>
      </>
    ));
  };
  function handleImageClick(imageUrl) {
    setSelectedImage(imageUrl);
    console.log(selectedImage);
  }
  return (
    <>
      <Header onSubmit={handleFilterChange} />
      <Navbar />
      <FileUploadPage selectedImage={selectedImage} />
      <div className="row justify-content-center p-2">
      <ShowPhoto onImageClick={handleImageClick} />
      </div>
    </>
  );
}
export default Home;
