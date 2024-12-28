
import React, { useState } from "react";
import "./css/Inner-Event.css";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from "../Footer";
import eventImage from "./../images/cotact-small-bg.jpg"; // Import the image

const ML_MANIA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "Join us for an exciting movie night filled with popcorn, laughter, and great company! Save the date and bring your favorite snacks to make it a memorable evening.",
    Timeline: "Event starts at 7 PM and ends at 11 PM. Be on time to grab the best seats!",
    RegistrationFee: "The registration fee is $10 per person. Includes snacks and beverages.",
    Contacts: "For more information, contact us at movie@night.com or call (123) 456-7890.",
  };

  const card = {
    id: 1,
    image: eventImage, // Replace with actual image URL
    rating: "team : 2",
    title: "ML MANIA",
  };

  return (
    <div>
      <Background />
      <Background2 />
      <section className="event-section">
        <div className="content">
          <div className="card">
            <img src={card.image} alt={card.title} />
            <div className="overlay">
              <span>{card.rating}</span>
              <h2>{card.title}</h2>
            </div>
          </div>
          <div className="info">
            {/* Added Heading */}
            <h3>ML MANIA</h3>
            <div className="tabs">
              {Object.keys(tabsContent).map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.replace(/([A-Z])/g, " $1").trim()}
                </button>
              ))}
            </div>
            <p>{tabsContent[activeTab]}</p>
            <div className="button-group">
              <button className="btn">Register</button>
              <button className="btn">Rule Book</button>
              <button className="btn">General Rule</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ML_MANIA;
