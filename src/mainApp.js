import React from "react";
import App from "./App";
import logo from "./logo-removebg-preview.png";

export default function MainApp() {
   return (
    <>
      <div className="w-100 imgBox p-absolute d-flex">
      <nav class="main-nav">
  <div class="nav-container">
    <a class="logo" href="#">
      <img src={logo} alt="Brand Logo" class="logo-img" />
    </a>
  </div>
</nav>


        <div className="appBox"> <App /></div>
        
       
      </div>

     
    </>
  );
}
