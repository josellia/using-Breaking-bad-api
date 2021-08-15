import React, { useState, useEffect } from "react";
import { getBreaking } from "./api/api";

import "./App.css";
import Quote from "./components/Quote";

const initialValue = {
  text: "",
  author: "",
};
function App() {
  const [quote, setQuote] = useState(initialValue);

  const quoteRandom = () => {
    getBreaking().then((data) => {
      const [newData] = data;
      const { quote, author } = newData;

      setQuote({
        text: quote,
        author: author,
      });
    });
  };

  useEffect(() => {
    quoteRandom();
  }, []);
  return (
    <div className="app">
      <button className="btn" onClick={quoteRandomin}>
        Gerar frases randômicas
      </button>
      <Quote quote={quote} />
    </div>
  );
}

export default App;
