import React, { useState } from "react";
import "./css/Event.css";
import Background from "./Background";
import Background2 from "./Background2";


const CODEFIESTA = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabsContent = {
    About: "Join us for an exciting movie night filled with popcorn, laughter, and great company! Save the date and bring your favorite snacks to make it a memorable evening.",
    Timeline: "Event starts at 7 PM and ends at 11 PM. Be on time to grab the best seats!",
    RegistrationFee: "The registration fee is $10 per person. Includes snacks and beverages.",
    Contacts: "For more information, contact us at movie@night.com or call (123) 456-7890.",
  };

  const card = {
    id: 1,
    image: "https://via.placeholder.com/250x450", // Replace with actual image URL
    rating: "8.5",
    title: "The Queen's Gambit",
  };

  return (
    <section className="event-section"><Background />
    <Background2 />
      <div className="content">
        <div className="card">
          <img src={card.image} alt={card.title} />
          <div className="overlay">
            <span>{card.rating}</span>
            <h2>{card.title}</h2>
          </div>
        </div>
        <div className="info">
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
          <button className="btn">Join</button>
        </div>
      </div>
    </section>
  );
};

export default CODEFIESTA;
