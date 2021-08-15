import React from "react";
import "./Quote.css";
const Quote = ({ quote }) => {
  return (
    <div className="container">
      <p className="container__title">{quote.text}</p>
      <span className="container__author">{quote.author}</span>
    </div>
  );
};

export default Quote;
