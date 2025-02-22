import React from "react";
import "../styles/Searchresults.css";

function Searchresults({ character, error }){ {/*props from App.js*/ }
    return(
        <div className="search-results">
            {error && <p className="error-message">{error}</p>} {/*displays any errors*/}

            {character && (
                <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>Height: {character.height} cm</p>
                    <p>Mass: {character.mass} kg</p>
                    <p>Birth Year: {character.birth_year}</p>
                </div>
            )}
        </div>
    );
}
export default Searchresults;