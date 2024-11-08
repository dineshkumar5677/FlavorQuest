import React from "react";
import App from "./App";
import logo from "./logo-removebg-preview.png";

export default function MainApp() {
  return (
    <>
      <div className="w-100 imgBox p-absolute d-flex">
        <nav className="navbar ">
         
            <a className="navbar-brand" href="#">
              <img src={logo}  alt="Bootstrap" width="250" height="100" />
            </a>
          
        </nav>
        <div className="appBox"> <App /></div>
       
      </div>

     
    </>
  );
}
