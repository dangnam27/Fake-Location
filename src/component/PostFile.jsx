import React, { useState } from "react";
import axios from "axios";

function FileUploadPage() {
  const [imageData, setImageData] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = async (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    return

  };

  async function handleSubmission() {
    if (isFilePicked) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post(
          "http://14.225.7.179:8081/post_img_folder/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
         setIsFilePicked(false)
      } catch (error) {
        console.error("Error:", error);
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


  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} className="btn btn-outline-warning" />
      {isFilePicked ? (
        <div>
          <img src={imageData} alt="Image" style={{ maxWidth: "200px" }} />
      </div>
      ) : (
        <p></p>
      )}
      <div>
        <button className="btn btn-outline-warning" id="post" onClick={handleSubmission}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default FileUploadPage;
