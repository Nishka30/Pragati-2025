import React from "react";
import Card from "./Card";
import Footer from "../Footer";
import "./css/Event.css";
import "./css/Card.css";
import "./css/index.css";
import Background from "./Background";
import Background2 from "./Background2";

const CodingAndEngineering = () => {
  return (
    <div className="pages"><Background />
    <Background2 />
      <div className="segment11">
        <div className="segment11-1">
          <h1 className="Events-title">COMPETITION :: CODING AND ENGINEERING</h1>
          <div className="Events-container">
            <div className="cardEvent__grid">
              {/* Card components */}
              <Card
                image="https://via.placeholder.com/320x200"
                title="CODEFIESTA"
                description="TEAM:: (2), CODING AND ENGINEERING"
                link="./CODEFIESTA" // unique link for this card
              />
              <Card
                image="https://via.placeholder.com/320x200"
                title="CATIA - DESIGN COMPETITION"
                description="TEAM:: (2), CODING AND ENGINEERING"
                link="/path2" // unique link for this card
              />
              <Card
                image="https://via.placeholder.com/320x200"
                title="CIRCUIT DESIGN COMPETITION"
                description="TEAM:: (1-3), CODING AND ENGINEERING"
                link="/path3" // unique link for this card
              />
              <Card
                image="https://via.placeholder.com/320x200"
                title="ML MANIA"
                description="TEAM:: (2), CODING AND ENGINEERING"
                link="/path4" // unique link for this card
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CodingAndEngineering;
