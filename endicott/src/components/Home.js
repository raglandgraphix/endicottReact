import React from "react";
import "../css/Home.css";


export default function Home(){

return(
<div className="container-fluid p-0">
    <div className="row fixed-top z-n1">
        <div className="col p-0">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-touch="true" data-bs-interval="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active  ">
        <div className="d-flex justify-content-center imgHold " >
            <img src="assets/ace1.jpg" className="imgSize " alt="..."/>
        </div>
      
      <div className="carousel-caption d-flex justify-content-left  w-m-100  ps-5">
        <div>
        <h1 className="d-block text-start">ACE HOTEL- Toronto</h1>
        <h4 className="d-block text-start">Toronto, ON, Canada</h4>
        <h4 className="d-block text-start">Architect: Shim-Sutcliffe</h4>
        <h4 className="d-block text-start">Photographer:Scott Norsway</h4>
        </div>
    </div>
    </div>
    <div className="carousel-item  ">
    <div className="d-flex justify-content-center imgHold " >
    <img src="assets/invisilug-sandbed.jpg" className=" imgSize" alt="..."/>
        </div>
     
      <div className="carousel-caption d-flex justify-content-left  w-100 ps-5">
        <div>
        <h1 className="d-block text-start">INVISI-LUG®</h1>
        <h4 className="d-block text-start">CLAY PAVERS</h4>
        
        </div>
    </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-center imgHold " >
    <img src="assets/debruce1.jpg" class=" imgSize " alt="..."/>
    </div>
      
    <div className="carousel-caption d-flex justify-content-left  w-100 ps-5">
        <div>
        <h1 className="d-block text-start">Paul and Linda DeBruce Hall</h1>
        <h4 className="d-block text-start">Kansas City, MO</h4>
    </div>
    </div>
       
        
    </div>
  </div>
  
</div>
        </div>


    </div>
    {/* <div id="slick" className="row p-0  ">
        <div id="holdme" className="col">
            <h1 className="text-light border-bottom border-white border-4">IN THE NEWS</h1>
            <div className="row mt-5">
                <div className="col-3">
                    <div className="card border border-black rounded-lg shadow">
                        <img className="card-img-top d-flex" src="assets/ace1.jpg"/>
                        <div className="card-body">
                            <h2 className="card-title">
                                Ace Hotel - Best in Class
                            </h2>
                            <p className="card-text">The Ace Hotel - Toronto, won Best in Class - Commercial AND Craftsmanship. Endicott thin brick and pavers were use through out the project. See the project here.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div> */}
    
</div>
);


}
