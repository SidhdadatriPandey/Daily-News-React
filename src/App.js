import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Nav from "./Components/Nav";

function App() {
  const [query, setQuery] = useState("India");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getData(query) {
      try {
        const API_KEY = "6a4d0b9cc11547a9af21d0da77643d74";
        const url = "https://newsapi.org/v2/everything?q=";
        let res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await res.json();
        setCards(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData(query);
  }, [query]);

  return (
    <div className="App">
      <Nav setQuery={setQuery}/>
      <Cards cards={cards} />
    </div>
  );
}

export default App;
