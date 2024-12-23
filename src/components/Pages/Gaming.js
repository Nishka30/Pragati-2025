// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/Card.css";
import "./css/index.css";

const Innovation = () => {
  return (
    <div>
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
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="FIFA"
          description="SOLO PATICIPATION, GAMING"
          link="/path2"  // unique link for this card
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