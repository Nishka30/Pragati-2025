import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Allocation } from "./components/Pages/Allocation";
import { Schedule } from "./components/Pages/Schedule";
import { Contact } from "./components/Pages/Contact";
import { Roomstart } from "./components/Pages/Roomstart";
import MouseShadow from "./components/MouseShadow";
import Innovation from "./components/Pages/Innovation";
import CodingAndEngineering from "./components/Pages/CodingAndEngineering";
import QuizAndMathAptitude from "./components/Pages/QuizAndMathAptitude";
import Gaming from "./components/Pages/Gaming";
import Robotics from "./components/Pages/Robotics";
import Preloader from "./components/Preloader"; // Import Preloader component
import { Members } from "./components/Pages/Members";

 // Import the Members component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading 5000
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading 
  }

  return (
    <Router>
      <NavBar />
      <MouseShadow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allocation" element={<Allocation />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roomstart" element={<Roomstart />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route
          path="/coding-and-engineering"
          element={<CodingAndEngineering />}
        />
        <Route
          path="/quiz-and-math-aptitude"
          element={<QuizAndMathAptitude />}
        />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/robotics" element={<Robotics />} />
        <Route path="/members" element={<Members />} /> {/* Add the Members route */}
      </Routes>
    </Router>
  );
}

export default App;
