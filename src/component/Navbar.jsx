import React from 'react'
import {  Link } from "react-router-dom";
import '../style/Navbar.css';


export default function Navbar() {
  return (
    <>

            <div class="container justify-content-center text-center pt-3">
            <div class="row">
                <div class="col">
                    <div class="card card1 col-md-3">
                    <img className=  "image " src="./asset/8411810.jpg"  alt="..."/>
                        <div class="card-body ">
                            <h5 class="pt-2">Landscape</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card  card1 col-md-3">
                    <img className=  "image" src="./asset/cute_woman_teacher_in_thailand_uniform_character_education_back_to_school_logo_cartoon_art_illustration.jpg" alt="..."/>
                        <div class="card-body">
                            <h5 class="pt-2">People</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card1 col-md-3">
                    <img className=  "image" src="./asset/rain.jpg"  alt="..."/>
                        <div class="card-body">
                            <h5 class="pt-2">Weather</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card  card1 col-md-3">
                    <img className=  "image" src="./asset/z4371866982853_dd6169481a6e23fb09bd3ff6ca4bd948.jpg"  alt="..."/>
                        <div class="card-body">
                            <h5 class="pt-2">Country</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card1 col-md-3">
                    <img className=  "image" src="./asset/z4371872288781_42b42d0ac9157c6fef4d49aaa803aaaf.jpg" alt="..."/>
                        <div class="card-body">
                            <h5 class="pt-2">Season</h5>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>

           

            
     
   
    
    </>
  )
}
