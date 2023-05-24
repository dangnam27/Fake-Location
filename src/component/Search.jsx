import React, { useState } from 'react'
import "../style/Search.css"

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

function Search(props) {
    return (
    <div>
        <nav class="navbar bg-body-tertiary ">
            <div class="container-fluid search1">
                <form className="d-flex">
                    <input className="form-control ms-5 me-2" type="search" placeholder="Tìm kiếm thứ bạn thích" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Tìm</button>
                </form>
                <Post/>
            </div>
            
        </nav>
    </div>
  )
}

export default Search


