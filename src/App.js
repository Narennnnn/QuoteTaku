import { MousePointer2 } from 'lucide-react';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState("");
  const [anime, setAnime] = useState("");
  const [character, setCharacter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchDataQuote() {
    try {
      setIsLoading(true); // Set loading state to true before making the request
      const response = await fetch("https://animechan.xyz/api/random");
      if (response.ok) {
        const data = await response.json();
        setQuote(data.quote);
        setAnime(data.anime);
        setCharacter(data.character);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after the request is done
    }
  }

  useEffect(() => {
    fetchDataQuote();
  }, []);

  return (
    <div className='App'>
      <div className="icon-container" onClick={fetchDataQuote} disabled={isLoading}>
        <MousePointer2 className="icon" />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 style={{ fontFamily: 'Abril Fatface, cursive' }}>"{quote}"</h2>
          <h3 style={{ fontFamily: 'Abril Fatface, cursive' }}>~{character}</h3>
        </>
      )}
    </div>
  );
}

export default App;
