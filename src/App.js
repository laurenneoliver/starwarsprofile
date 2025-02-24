import React, {useState} from 'react'
import axios from "axios";
import './App.css'
import Searchbar from './components/Searchbar'
import SearchResults from "./components/Searchresults";
import Characterquiz from "./components/Characterquiz";

function App() {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");

  const fetchCharacter = async (query) => {
    if (!query) return; // does not make request if empty

    try {
        const response = await axios.get(`http://localhost:3000/api/people?search=${query}`);
        setCharacter(response.data); // Stores data as character
        setError(""); // Clears previous errors
    } catch (err) {
        setCharacter(null);
        setError("Character not found"); // updates error if API fails
    }
  };
  return (
    <div className='app'>
      <div className="searchbar-container">
        <h1>Search the Jedi Archives for your Character</h1>
        <Searchbar onSearch={fetchCharacter} /> {/*passes the API request function to onSearch*/}
        <SearchResults character={character} error={error} /> {/*Displays character results from API requests*/}
        <h1>Uncover Your True Galactic Identity bellow!</h1>
        <Characterquiz onCharacterSelected={fetchCharacter} /> {/*passes the API request function to onCharacterSelected*/}
        <SearchResults character={character} error={error} /> {/*Displays character results from API requests*/}
        </div>
    </div>
  );
}

export default App