// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";

const Innovation = () => {
  return (
    <div><Background />
    <Background2 />
       <div className="pages"> 
     <div className="segment11">
        <div className="segment11-1">
        <h1 className="Events-title">COMPITITION :: GAMING</h1>

    <div className="Events-container">
      <div className="cardEvent__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="NFS-MOST WANTED"
          description="SOLO PATICIPATION, GAMING"
          link="/NFS_MOSTWANTED"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="FIFA"
          description="SOLO PATICIPATION, GAMING"
          link="/FIFA"  // unique link for this card
        />
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/>
  </div>
  );
};

export default Innovation;