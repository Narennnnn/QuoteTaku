import { MousePointer2 } from 'lucide-react';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [anime, setAnime] = useState("");
  const [character, setCharacter] = useState("");

  async function fetchDataQuote() {
    try {
      const response = await fetch("https://animechan.xyz/api/random");
      const data = await response.json();
      setQuote(data.quote);
      setAnime(data.anime);
      setCharacter(data.character);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchDataQuote();
  }, []);

  return (
    <div className='App'>
      <div className="icon-container" onClick={fetchDataQuote}>
        <MousePointer2 className="icon" />
      </div>
      <h2 style={{ fontFamily: 'Abril Fatface, cursive' }}>"{quote}"</h2>
      <h3 style={{ fontFamily: 'Abril Fatface, cursive' }}>~{character}</h3>
    </div>
  );
}

export default App;
