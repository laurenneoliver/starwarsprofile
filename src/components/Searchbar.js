import React, {useState} from "react";
import axios from "axios";
import '../styles/Searchbar.css';
import { FaSearch } from "react-icons/fa";

function Searchbar(){
    const [input, setInput] = useState("");
    const [character, setCharacter] = useState(null);
    const [error, setError] = useState("");

    const fetchCharacter = async () => {
        if (!input) return; // does not make request if empty

        try {
            const response = await axios.get(`http://localhost:3000/api/people?search=${input}`);
            setCharacter(response.data); // Stores data as character
            setError(""); // Clears previous errors
        } catch (err) {
            setCharacter(null);
            setError("Character not found"); // updates error if API fails
        }
    };
    return(
        <div className="input-wrapper">
            <FaSearch id='search-icon' style={{color: 'black'}}/>
            <input 
                placeholder="Search for characters..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchCharacter()} // when enter is pushed API call is sent
            />
            {character && (
                <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>Height: {character.height} cm</p>
                    <p>Mass: {character.mass} kg</p>
                    <p>Birth Year: {character.birth_year}</p>
                </div>
            )}

            {error && <p className="error-message">{error}</p>} // displays error
        </div>
    );
};

export default Searchbar;