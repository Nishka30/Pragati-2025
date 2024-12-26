import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import Footer from "../Footer";
import "./css/schedule.css";
import "../MouseShadow.css";
import Background from "./Background";
import Background2 from "./Background2";

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  // Schedule data for each day
  const scheduleData = {
    "Day 1": [
      {
        title: "09:00 AM - 09:30 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 09:30 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 09:30 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 09:30 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 09:30 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 09:30 am, participant registration will continue
              at Amtala in MCKVIE College campus. Participants are requested to
              bring valid college ID to register at the registration desk.
            </li>
          </ul>
        ),
      },
      {
        title:
          "09:30 AM - 10:00 AM IST - Inauguration Program (Seminar Hall, Room: B312)",
        description: (
          <ul>
            <li>
              The inauguration program of PRAGATI 2024, the annual techfest of
              MCKVIE will begin at the Seminar Hall (Room: B312).
            </li>
          </ul>
        ),
      },
    ],
    "Day 2": [
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">INNOVATIVE IDEA</Link>
            </li>
            <li>
              <Link to="/about">CODEFIESTA</Link>
            </li>
          </ul>
        ),
      },
    ],
    "Day 3": [
      {
        title: "09:00 AM - 10:00 AM IST - Registration (Amtala)",
        description: (
          <ul>
            <li>
              From 09:00 am - 10:00 am, participant registration will continue
              at Amtala in MCKVIE College campus.
            </li>
          </ul>
        ),
      }, //<Link to="/about">Click here for more event details</Link>
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">TECHNICAL POSTER</Link>
            </li>
            <li>
              <Link to="/about">QUIZOMANIA</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">TECHNICAL POSTER</Link>
            </li>
            <li>
              <Link to="/about">QUIZOMANIA</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">TECHNICAL POSTER</Link>
            </li>
            <li>
              <Link to="/about">QUIZOMANIA</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">TECHNICAL POSTER</Link>
            </li>
            <li>
              <Link to="/about">QUIZOMANIA</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">TECHNICAL POSTER</Link>
            </li>
            <li>
              <Link to="/about">QUIZOMANIA</Link>
            </li>
          </ul>
        ),
      },
      {
        title: "10:00 AM - 11:00 AM IST - Event continues of Pragati2024",
        description: (
          <ul>
            <li>
              <Link to="/about">TECHNICAL POSTER</Link>
            </li>
            <li>
              <Link to="/about">QUIZOMANIA</Link>
            </li>
          </ul>
        ),
      },
    ],
  };

  return (
    <div>
      <Background />
      <Background2 />
      <div className="pages">
        <div className="segment11">
          <div className="segment11-1">
            {/* Buttons for Selecting Days */}
            <h3>** Still in development **</h3>
            <br></br>
            <div className="day-selector">
              {Object.keys(scheduleData).map((day) => (
                <button
                  key={day}
                  className={`day-button ${
                    selectedDay === day ? "active" : ""
                  }`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Timeline for the Selected Day */}
            <section className="time-line">
              {scheduleData[selectedDay].map((item, index) => (
                <div
                  className="schedule-container"
                  key={index}
                  style={{ "--dly": `${index * 0.5}s` }}
                >
                  <div className="text-content">
                    <h2>{item.title}</h2>
                    <div>{item.description}</div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
