import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import "../style/PostFile.css";
import { saveAs } from "file-saver";
import PostComments from "./PostComments";

function FileUploadPage(props) {
  const { selectedImage } = props;

  const [selectedFile, setSelectedFile] = useState("");
  const [selectedGround, setSelectedGround] = useState("");
  const [links, setLinks] = useState(null);

  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isGroundPicked, setIsGroundPicked] = useState(false);
  const [image, setImage] = useState({ image1: "", image2: "" });
  const [isLinks, setIsLinks] = useState(true);

  const [comments, setComments] = useState([]);

  function handleCommentAdded(commentText) {
    setComments([...comments, commentText]);
  }

  useEffect(() => {
    if (selectedImage) {
      setSelectedGround(selectedImage);
      setImage({ ...image, image2: selectedImage });
      setIsFilePicked(true);
    }
  }, [selectedImage]);

  const changeHandler = async (event) => {
    uploadFile(event.target.files[0], (str) => {
      setImage({ ...image, image1: str });
    });
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSelectedFile(reader.result);
    };
    setIsFilePicked(true);
  };
  const changeHandlerGround = async (event) => {
    uploadFile(event.target.files[0], (str) => {
      setImage({ ...image, image2: str });
    });
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setSelectedGround(reader.result);
    };
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
        setLinks(response.data.linkreturn);
        console.log("đây là link ảnh", response.data);
        console.log("đây là link ảnh:", links);
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
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const blob = new Blob([response.data], { type: "image/jpeg" });
      saveAs(blob, "image.jpg");
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
    <>
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
            <div className=" col-md-8   card p-3">
              <img
                src={selectedFile}
                alt="Image"
                style={{ maxWidth: "300px", maxHeight: "400px" }}
                className="card-img-top"
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
          {isGroundPicked ? (
            <div className="imageDiv col-md-8   card p-3">
              <img
                src={selectedGround}
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
            <div className="col-md-8  card p-3 m-0">
              <p className="p-2 text-primary fw-bold"> Ảnh hoàn thiện </p>
              <img
                src={links}
                alt="Ảnh hoàn thiện"
                style={{ maxWidth: "300px", maxHeight: "400px" }}
              />
              <PostComments
                className="text-center card-title"
                imageSrc={links}
                comments={comments}
                onCommentAdded={handleCommentAdded}
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
    </>
  );
}
export default FileUploadPage;
