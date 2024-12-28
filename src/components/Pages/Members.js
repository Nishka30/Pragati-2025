import React from "react";
import "./css/Members.css";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import Footer from "../Footer"; // Import Footer component
import Background from "./Background";
import Background2 from "./Background2";

export const Members = () => {
  return (
    <div className="member-page"> <Background />
    <Background2 />
      <h1 className="page-title">Our Team</h1>

      {/* Tech Team Section */}
      <section className="team-section">
        <h2 className="section-title">Tech Team</h2>
        <div className="team-container">
          {/* Tech Team Members */}
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
              <p className="member-role">Developer</p>
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
              <p className="member-role"> Developer</p>
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
              <p className="member-role">Developer</p>
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

          <div className="team-member">
            <div className="member-photo">
              <img
                src="/001.jpg"
                alt="Tech Team Member"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Rohit Kumar</h3>
              <p className="member-role">Developer</p>
              <p className="member-roll">B.VOC/SD-2nd Year</p>
              <div className="member-social">
                <a
                  href="https://wa.link/9l81kp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon whatsapp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/rohit..writes_?igsh=Zm1hMnI3aGZvZXRx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/Rohitsaw6207"
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
              <p className="member-role">Developer</p>
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
              <p className="member-role">Developer</p>
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
          {/* Event Organizers */}
          <div className="team-member">
            <div className="member-photo">
              <img
                src="https://via.placeholder.com/150"
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Organizer 1</h3>
              <p className="member-role">Event Manager</p>
              <p className="member-roll">Roll No: 100001</p>
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
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Organizer 2</h3>
              <p className="member-role">Logistics Coordinator</p>
              <p className="member-roll">Roll No: 100002</p>
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
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Organizer 3</h3>
              <p className="member-role">Event Coordinator</p>
              <p className="member-roll">Roll No: 100003</p>
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
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Organizer 4</h3>
              <p className="member-role">Venue Manager</p>
              <p className="member-roll">Roll No: 100004</p>
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
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Organizer 5</h3>
              <p className="member-role">Sponsorship Manager</p>
              <p className="member-roll">Roll No: 100005</p>
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
                alt="Event Organizer"
                className="member-img"
              />
            </div>
            <div className="member-info">
              <h3 className="member-name">Organizer 6</h3>
              <p className="member-role">Marketing Manager</p>
              <p className="member-roll">Roll No: 100006</p>
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
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Members;
