import React, { useState, useEffect } from "react";
import FileUploadPage from "../PostFile";
import Header from "../Header";
import Navbar from "../Navbar";
import { createClient } from "pexels";
import "./home.css";
import Pagination from "./Pagination";

function Home() {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isShowPhoto, setIsShowPhoto] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    _totalRows: 1,
  });

  async function handleFilterChange(newFilter, page) {
    const filter = JSON.stringify(newFilter.search);
    if (filter.length > 2) {
      try {
        const client = createClient(
          "NqYb6lacRmDLsyN6i31xRcr842G3d9GEKdJ7ywSjq7Amx7WftErRwZHw"
        );
        const query = JSON.stringify(newFilter.search);
        console.log(query);
        const response = await client.photos.search({
          query,
          per_page: 6,
          page: 6,
        });
        const photos = response.photos;
        setImageUrls(photos);
        setIsShowPhoto(false);
        setPagination({
          page: page,
          _totalRows: response.total_results,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setIsShowPhoto(true);
    }
  }
  useEffect(() => {
    handleFilterChange({ search: "" }, pagination.page);
    console.log(pagination.page);
  }, [pagination.page]);

  function handlePageChange(newPage) {
    handleFilterChange({ search: "" }, newPage);
  }

  const ShowPhoto = ({ onImageClick }) => {
    return imageUrls.map((photos) => (
      <>
        <div className=" col-md-2 mb-4 col-sm-6  " key={photos.id}>
          <div className="card text-center p-4 ">
            <img
              src={photos.src.large}
              className="card-img-top photoSearch"
              alt="#"
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
      {isShowPhoto ? (
        <Navbar />
      ) : (
        <div className="row justify-content-center p-2">
          <ShowPhoto onImageClick={handleImageClick} />
          <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
      )}
      <FileUploadPage selectedImage={selectedImage} />
    </>
  );
}
export default Home;
