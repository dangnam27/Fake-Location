// 1import {useState} from 'react';
// 2
// 3 export default function FileUploadPage(){
// 4   const [selectedFile, setSelectedFile] = useState();
// 5   const [isFilePicked, setIsFilePicked] = useState(false);
// 6
// 7   const changeHandler = (event) => {
// 8     setSelectedFile(event.target.files[0]);
// 9     setIsSelected(true);
// 10   };
// 11
// 12   const handleSubmission = () => {
// 13   const formData = new FormData();
// 14
// 15   formData.append('File', selectedFile);
// 16
// 17   fetch(
// 18     'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
// 19     {
// 20       method: 'POST',
// 21       body: formData,
// 22     }
// 23   )
// 24   .then((response) => response.json())
// 25   .then((result) => {
// 26     console.log('Success:', result);
// 27   })
// 28   .catch((error) => {
// 29     console.error('Error:', error);
// 30   });
// 31  };
// 32};
// 33
// 34   return(
// 35     <div>
// 36       <input type="file" name="file" onChange={changeHandler} />
// 37       {isFilePicked ? (
// 38         <div>
// 39           <p>Filename: {selectedFile.name}</p>
// 40           <p>Filetype: {selectedFile.type}</p>
// 41           <p>Size in bytes: {selectedFile.size}</p>
// 42           <p>Last modified date: {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
// 43         </div>
// 44       ) : (
// 45         <p>Select a file to show details</p>
// 46       )}
// 47       <div>
// 48         <button onClick={handleSubmission}>Submit</button>
// 49       </div>
// 50     </div>
// 51  )
// 52};