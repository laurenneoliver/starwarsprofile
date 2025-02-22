import React from "react";
import "../styles/Searchresults.css";

function Searchresults({ character, error }){ {/*props from App.js*/ }
    return(
        <div className="search-results">
            <div>Search Results</div>
            {error && <p className="error-message">{error}</p>} {/*displays any errors*/}

            {character && (
                <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>Height: {character.height} cm</p>
                    <p>Mass: {character.mass} kg</p>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Species: {character.species_name || "Unknown"}</p>
                </div>
            )}
        </div>
    );
}
export default Searchresults;