import React, {useState} from 'react'
import axios from "axios";
import './App.css'
import Searchbar from './components/Searchbar'
import SearchResults from "./components/Searchresults";

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
      <h1>Search the Jedi Archives and find Your Character</h1>
      <div className="searchbar-container">
        <Searchbar onSearch={fetchCharacter} /> {/*passes the API request function to onSearch*/}
        <SearchResults character={character} error={error} /> {/*Displays character results from API requests*/}
        </div>
    </div>
  );
}

export default App