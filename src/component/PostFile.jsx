import React, { useState } from "react";
import axios from "axios";

function FileUploadPage() {
  const [imageData, setImageData] = useState(null);
  const [groundData, setGroundData] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedGround, setSelectedGround] = useState("");

  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isGroundPicked, setIsGroundPicked] = useState(false);

  const changeHandler = async (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const changeHandlerGround = async (event) => {
    setSelectedGround(event.target.files[0]);
    setIsGroundPicked(true);
  };
  // // chuyển image sang base64
  function fileToBase64(file, cb) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

 

  // post lên imgbb
  async function handleSubmission() {
    if (isFilePicked) {
      const formData = new FormData();
      formData.append("file", setSelectedFile);
      // formData.append("imagebackground", selectedGround);
      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?expiration=60&key=7239a119b60707f567ebd17c097f5696",
          formData
        );
        // return response.data.data.url;
        console.log(response.data.data.url);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }

  if (isFilePicked) {
    const reader = new FileReader();
    reader.onload = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  }

  if (isGroundPicked) {
    const reader = new FileReader();
    reader.onload = () => {
      setGroundData(reader.result);
    };
    reader.readAsDataURL(selectedGround);
  }

  return (
    <div className="container-fluid ms-5 row">
      <div className="d-inline col-md-4">
        <input
          id="Img1"
          type="file"
          name="file"
          onChange={changeHandler}
          className="btn btn-outline-warning"
          multiple="multiple"
        />
        <p>Ảnh gốc</p>
        {isFilePicked ? (
          <div>
            <img src={imageData} alt="Image" style={{ maxWidth: "300px" }} />
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
          multiple="multiple"
        />
        <p>Ảnh BackGround</p>
        {isFilePicked ? (
          <div>
            <img src={groundData} alt="Image" style={{ maxWidth: "300px" }} />
          </div>
        ) : (
          <p></p>
        )}
      </div>

      <div className="col-md-4">
        {/* <Link to=""> */}{" "}
        <button
          className="btn btn-outline-warning"
          id="post"
          onClick={handleSubmission}
        >
          Submit
        </button>{" "}
        {/* </Link> */}
      </div>
    </div>
  );
}
export default FileUploadPage;
