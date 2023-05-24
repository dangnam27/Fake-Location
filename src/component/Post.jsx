import React from 'react'

const dataAPI = "https://raw.githubusercontent.com/sonnh7289/python3-download/main/location-data2.json?fbclid=IwAR1paTA_ucuBDjTSeiBK5wQM7tqmu9Ih6U-pxvb_t97Cp-QVPwAlDflEkNw"
 
function handlePost (){  
   onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        console.log(name);
    } 
}
handlePost ()

function postData(data, callback) {
    var options = {
        method : 'POST',
        headers: {
            "Content-Type": "application/json",
         
          },
        body : JSON.stringify(data)
    };

    fetch(dataAPI, options)
    .then(function (response) {
        response.json(options);
    })
    .then(callback);
}


 function Post() {
  return (
    <div>
       
        <div>
           
            <input type="file" name='name'/>
            <button onclick = "handlePost ()" id ='post'>Post</button>
        </div>
       
    </div>
  )
}




export default Post