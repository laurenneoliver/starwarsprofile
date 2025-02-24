import React from "react";
import "../styles/Searchresults.css";

function Searchresults({ character, error }){ {/*props from App.js*/ }
    return(
        <div className="search-results">
            <div>Results</div>
            {error && <p className="error-message">{error}</p>} {/*displays any errors*/}

            {character && (
                <div className="character-info">
                    <h3>{character.name}</h3>
                    <p>Height: {character.height} cm</p>
                    <p>Mass: {character.mass} kg</p>
                    <p>Birth Year: {character.birth_year}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Species: {character.species_name || "Unknown"}</p>
                    <h4>Films Appeared In:</h4>
                    <ul>
                        {character.films.length > 0 ? (
                            character.films.map((film, index) => <li key={index}>{film}</li>)
                        ) : (
                            <li>None</li>
                        )}
                    </ul>

                    <h4>Starships Flown:</h4>
                    <ul>
                        {character.starships.length > 0 ? (
                            character.starships.map((starship, index) => <li key={index}>{starship}</li>)
                        ) : (
                            <li>None</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
export default Searchresults;