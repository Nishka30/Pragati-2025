import React from "react";
import "./css/Members.css";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import Footer from "../Footer"; // Import Footer component

export const Members = () => {
  return (
    <div className="member-page">
      <h1 className="page-title">Our Team</h1>

      {/* Tech Team Section */}
      <section className="team-section">
        <h2 className="section-title">Tech Team</h2>
        <div className="team-container">
          {/* First Row of Tech Team Cards */}
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">John Doe</h3>
              <p className="member-role">Lead Developer</p>
              <p className="member-roll">Roll No: 123456</p>
              <div className="member-social">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Jane Smith</h3>
              <p className="member-role">Frontend Developer</p>
              <p className="member-roll">Roll No: 654321</p>
              <div className="member-social">
                <a
                  href="https://wa.me/9876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Sam Taylor</h3>
              <p className="member-role">Backend Developer</p>
              <p className="member-roll">Roll No: 789012</p>
              <div className="member-social">
                <a
                  href="https://wa.me/2345678901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Second Row of Tech Team Cards */}
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Alex Morgan</h3>
              <p className="member-role">Full Stack Developer</p>
              <p className="member-roll">Roll No: 101112</p>
              <div className="member-social">
                <a
                  href="https://wa.me/3456789012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Emma Clark</h3>
              <p className="member-role">UI/UX Designer</p>
              <p className="member-roll">Roll No: 131415</p>
              <div className="member-social">
                <a
                  href="https://wa.me/4567890123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Daniel Lee</h3>
              <p className="member-role">DevOps Engineer</p>
              <p className="member-roll">Roll No: 161718</p>
              <div className="member-social">
                <a
                  href="https://wa.me/5678901234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon github"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Organizers Section */}
      <section className="team-section">
        <h2 className="section-title">Event Organizers</h2>
        <div className="team-container">
          {/* Add 10 Event Organizers Cards here in a similar way */}
          {Array(10)
            .fill()
            .map((_, index) => (
              <div className="team-member" key={index}>
                <div className="member-photo">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Event Organizer"
                    className="member-img"
                  />
                </div>
                <div className="member-info">
                  <h3 className="member-name">Organizer {index + 1}</h3>
                  <p className="member-role">Role {index + 1}</p>
                  <p className="member-roll">Roll No: {index + 100000}</p>
                  <div className="member-social">
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon whatsapp"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon github"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Members;
