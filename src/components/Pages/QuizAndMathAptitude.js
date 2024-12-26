// Event.js
import React from "react";
import Card from "./Card";
import Footer from '../Footer';
import "./css/Event.css";
import "./css/Card.css";
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
        <h1 className="Events-title">COMPITITION :: QUIZ AND MATH APTITUDE</h1>
    <div className="Events-container">
      <div className="cardEvent__grid">
        <Card
          image="https://via.placeholder.com/320x200"
          title="ENIGMA"
          description="TEAM:: (2-3), QUIZ AND MATH APTITUDE"
          link="/path1"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="QUIZOMANIA"
          description="TEAM:: (1-3), QUIZ AND MATH APTITUDE"
          link="/path2"  // unique link for this card
        />
        <Card
          image="https://via.placeholder.com/320x200"
          title="MATH MANIA"
          description="TEAM:: (2), QUIZ AND MATH APTITUDE"
          link="/path3"  // unique link for this card
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