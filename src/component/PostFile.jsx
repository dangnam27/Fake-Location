import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import "../style/PostFile.css";
import { saveAs } from 'file-saver';


function FileUploadPage() {
  // const [imageData, setImageData] = useState(null);
  // const [groundData, setGroundData] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedGround, setSelectedGround] = useState("");
  const [links, setLinks] = useState(null);

  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isGroundPicked, setIsGroundPicked] = useState(false);
  const [image, setImage] = useState({ image1: "", image2: "" });
  const [isLinks, setIsLinks] = useState(true);

  const changeHandler = async (event) => {
    uploadFile(event.target.files[0], (str) => {
      setImage({ ...image, image1: str });
    });

    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const changeHandlerGround = async (event) => {
    uploadFile(event.target.files[0], (str) => {
      setImage({ ...image, image2: str });
    });
    setSelectedGround(event.target.files[0]);
    setIsGroundPicked(true);
  };

  async function handleSubmission() {
    setIsLinks(false);

    if (isFilePicked) {
      const formData = new FormData();
      formData.append("imagegoc", image.image1);
      formData.append("imagebackground", image.image2);
      try {
        const response = await axios.post(
          "http://14.225.7.179:8081/change_background/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              imagegoc: image.image1,
              imagebackground: image.image2,
            },
          }
        );

        console.log(response.data.linkreturn);
        setLinks(response.data.linkreturn);
        console.log("đây là link ảnh", links);
        setIsLinks(true);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
  // download ảnh về

function handleDownload(url) {
  axios({
    url: url,
    method: 'GET',
    responseType: 'blob'
  }).then((response) => {
    const blob = new Blob([response.data], { type: 'image/jpeg' });
    saveAs(blob, 'image.jpg');
  });
}

  // post lên imgbb
  async function uploadFile(file, cb) {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?expiration=60&key=7239a119b60707f567ebd17c097f5696",
        formData
      );
      console.log(response.data.data.url);
      cb(response.data.data.url);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return (
    <div className="container-fluid ms-5 row">
      <div className="d-inline col-md-4">
        <input
          type="file"
          name="file"
          onChange={changeHandler}
          className="btn btn-outline-warning"
        />
        <p className="p-2 text-primary fw-bold">Ảnh gốc</p>
        {isFilePicked ? (
          <div className="imageDiv">
            <img
              src={image.image1}
              alt="Image"
              style={{ maxWidth: "300px", maxHeight: "400px" }}
            />
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <div className="col-md-4">
        <input
          type="file"
          name="file"
          onChange={changeHandlerGround}
          className="btn btn-outline-warning"
        />
        <p className="p-2 text-primary fw-bold">Ảnh BackGround</p>
        {isFilePicked ? (
          <div className="imageDiv">
            <img
              src={image.image2}
              alt="Image"
              style={{ maxWidth: "300px", maxHeight: "400px" }}
            />
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <div className="col-md-4">
        <div></div>
        <button
          className="btn btn-outline-warning"
          id="post"
          onClick={handleSubmission}
        >
          Submit
        </button>
        <button
          className=" btn btn-outline-success ms-1"
          onClick={() => {
            handleDownload(links);
          }}
        >
          Download file
        </button>

        {isLinks ? (
          <div className="imageDiv">
            <p className="p-2 text-primary fw-bold"> Ảnh hoàn thiện </p>
            <img
              src={links}
              alt="Ảnh hoàn thiện"
              style={{ maxWidth: "300px", maxHeight: "400px" }}
            />
          </div>
        ) : (
          <div className="p-1">
            <p className="p-2 text-primary fw-bold">Bạn chờ một chút nhé </p>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
export default FileUploadPage;
