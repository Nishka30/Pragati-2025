import React from "react";
import "./css/roomAllocation.css";
import Footer from "../Footer";

export const Allocation = () => {
  return (
    <div>
      <div className="pages">
        <div className="segment11">
          <div className="segment11-1">
            <div className="room-allocation-container">
              {/* <h3>** Still in development **</h3> */}
              <h1 className="room-allocation-title">Room Allocation</h1>
              <div className="room-allocation-table">
                <div className="table-header">
                  <div className="header-item">Date</div>
                  <div className="header-item">Room</div>
                  <div className="header-item">Event</div>
                </div>
                {[
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                  {
                    date: "2024-01-10",
                    room: "demo-room",
                    event: "demo-event",
                  },
                ].map((data, index) => (
                  <div
                    key={index}
                    className={`table-row ${
                      index % 2 === 0 ? "slide-from-right" : "slide-from-left"
                    }`}
                  >
                    <div className="row-item">{data.date}</div>
                    <div className="row-item">{data.room}</div>
                    <div className="row-item">{data.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
