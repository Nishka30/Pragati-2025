import { useState } from "react";
import React from "react";
import Background from "./Background";
import Background2 from "./Background2";
import Footer from '../Footer';
import './css/contact.css'; // Import your CSS

export const Contact = () => {
  const faqData = [
    {
      question: "What is the event about ?",
      answer:
        "The event is a gathering of industry leaders, innovators, and enthusiasts to discuss the latest trends and opportunities.",
    },
    {
      question: "When and where will the event take place  ?",
      answer:
        "The event will take place on March 15th, 2024, at the Grand Convention Center, Downtown City.",
    },
    {
      question: "How can I register for the event ?",
      answer:
        "You can register online through our official website by visiting the 'Register' section.",
    },
    {
      question: "Is the event free of charge  ?",
      answer: "No, the event has a registration fee. Early bird discounts are available.",
    },
    {
      question: "Will there be virtual attendance options  ?",
      answer: "Yes, the event will be available for live streaming for registered attendees.",
    },
  ];
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  return (
    <div><Background /><Background2 />
    <div className="pages"> 
     <div className="segment111">
        <div className="segment111-1">
          <div className="contuct-us-text">
            <h1>Faqs</h1>
          </div>
          <div className="faqs-text"><h1>Event Location</h1></div>
        </div>
        <div className="faq-1">
          
          <div className="faq1"><h1>GOT QUESTIONS ? <br/>WE HAVE ANSWERS </h1 >
          <p>Discover detailed answers to the most frequently asked questions, uncover valuable information, and gain in-depth knowledge about the event to ensure you're fully informed and ready to make the most of the experience.</p></div>


          <div className="faq2">
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <h1
            className="faq-question"
            onClick={() => toggleAnswer(index)}
            style={{ cursor: "pointer", color: "#007BFF" }}
          >
            {item.question} 
          </h1>
          {visibleIndex === index && (
            <b><p className="faq-answer" style={{ marginTop: "5px" }}>
              {item.answer}
            </p></b>
          )}
        </div>
      ))}
    </div>
        </div>
        <div className="loc-text"><h1>Event Location</h1></div>

        <iframe className="map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9151917805607!2d88.34512757435475!3d22.61964193124633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1733461586378!5m2!1sen!2sin"
                              width="100%"
                              height="370"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"/>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
