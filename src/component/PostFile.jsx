import React, { useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function FileUploadPage() {
  const [imageData, setImageData] = useState(null);
  const [groundData, setGroundData] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedGround, setSelectedGround] = useState("");
  const [links, setLinks] = useState(null)

  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isGroundPicked, setIsGroundPicked] = useState(false);
  const [image, setImage] = useState({image1:'', image2: ''});

  const changeHandler = async (event) => {

    uploadFile(event.target.files[0], (str)=>{
      setImage({...image, image1:str});
    });
    
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);

  };
  const changeHandlerGround = async (event) => {
    uploadFile(event.target.files[0], (str)=>{
      setImage({...image, image2:str});
    });
    setSelectedGround(event.target.files[0]);
    setIsGroundPicked(true);
    
  };
  // console.log(image)

 
  async function handleSubmission() {
    // console.log(image)
    if (isFilePicked) {
      const formData = new FormData();
      formData.append("imagegoc", image.image1);
      formData.append("imagebackground", image.image2);
      try {
        const response = await axios.post(
          "http://14.225.7.179:8081/change_background/",
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "imagegoc": image.image1,
              "imagebackground": image.image2,
            },
          }
        );
       
        console.log(response.data.linkreturn);
        setLinks(response.data.linkreturn);
        console.log("đây là link ảnh", links);
        
      } catch (error) {
        console.error(error);
        return null;
      }
    }
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
          type="file"
          name="file"
          onChange={changeHandler}
          className="btn btn-outline-warning"
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
        {isFilePicked ? (
          <div>
            <img src={links} alt="Image" style={{ maxWidth: "300px" }} />
          </div>
        ) : (
          <p></p>
        )}
        {/* </Link> */}
      </div>
    </div>
  );
}
export default FileUploadPage;
