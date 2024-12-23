import React from "react";
import "./css/Members.css"; // Import the CSS for styling

export const Members = () => {
  return (
    <div className="member-page">
      <h1 className="page-title">Our Team</h1>
      
      {/* Tech Team Section */}
      <section className="team-section">
        <h2 className="section-title">Tech Team</h2>
        <div className="team-container">
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150" // Placeholder image
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">John Doe</h3>
              <p className="member-role">Lead Developer</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150" // Placeholder image
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-role">Frontend Developer</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150" // Placeholder image
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Mike Johnson</h3>
              <p className="member-role">Backend Developer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Organizers Section */}
      <section className="team-section">
        <h2 className="section-title">Event Organizers</h2>
        <div className="team-container">
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150" // Placeholder image
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Alice Williams</h3>
              <p className="member-role">Event Coordinator</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150" // Placeholder image
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Robert Brown</h3>
              <p className="member-role">Logistics Manager</p>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150" // Placeholder image
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Eve White</h3>
              <p className="member-role">Guest Relations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
