import React, { useState } from "react";
import "./css/roomAllocation.css";
import Footer from "../Footer";

export const Allocation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const data = [
    { date: "2024-01-10", room: "demo-room", event: "demo-event" },
    { date: "2024-01-11", room: "main-hall", event: "conference" },
    { date: "2024-01-12", room: "auditorium", event: "workshop" },
    { date: "2024-01-13", room: "room-101", event: "seminar" },
    { date: "2024-01-14", room: "room-202", event: "team-meeting" },
  ];

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.event.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(results);
    setIsSearched(true);
  };

  return (
    <div>
      <div className="pages">
        <div className="segment11">
          <div className="segment11-1">
            <div className="room-allocation-container">
              <h1 className="room-allocation-title">Room Allocation</h1>
              {/* Search Bar with Button */}
              <div className="search-container">
                <button className="search-button" onClick={handleSearch}>
                  Search
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by event name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Table */}
              {isSearched && (
                <div className="room-allocation-table">
                  <div className="table-header">
                    <div className="header-item">Date</div>
                    <div className="header-item">Room</div>
                    <div className="header-item">Event</div>
                  </div>
                  {filteredData.length > 0 ? (
                    filteredData.map((data, index) => (
                      <div
                        key={index}
                        className={`table-row ${
                          index % 2 === 0
                            ? "slide-from-right"
                            : "slide-from-left"
                        }`}
                      >
                        <div className="row-item">{data.date}</div>
                        <div className="row-item">{data.room}</div>
                        <div className="row-item">{data.event}</div>
                      </div>
                    ))
                  ) : (
                    <div className="no-results">No events found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
