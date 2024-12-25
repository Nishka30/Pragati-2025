import React, { useEffect } from "react";
import "./css/home.css";
import "./css/index.css";
import Footer from '../Footer';
import Background from "./Background";
import Background2 from "./Background2";

export const Home = () => {

  return (
    <div>
    <Background />
    <Background2 />
<div className="pages">      
      <div className="segment1">
        <div className="segment1-1" style={{zIndex: 10}}>
          <h1>Welcome Pragati 2K25,<br />Battleground of Students</h1>
          <p>Unleash Brainwave's potential & show <br />the power of your knowledge</p>
        </div>
      </div>
    </div> 
      <Footer />
     
    </div>
  );
};
