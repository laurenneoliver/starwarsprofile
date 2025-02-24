const express = require("express");
const cors = require('cors');
const axios = require("axios");
const app = express();
const PORT = 3000;
const BASE_URL = 'https://swapi.dev/api/people/'; //SWAPI endpoint

app.use(express.json());
app.use(cors()); 

// ** Request Routing & Proxying **
// Description: Fetches Star Wars character details from SWAPI based on the search query.

app.get('/api/people', async (req, res) => {
    try {
        const { search } = req.query; // stores search parameter
        
        if (!search) {
            return res.status(400).json({ error: "Search query is required" }); // hanldes error if empty
        }

        const response = await axios.get(`${BASE_URL}?search=${search}`); // sends get request with search as query parameter
        
        if (response.data.count === 0) {
            return res.status(404).json({ message: `${search} was not found` }); // error handling if no matching character
        }

        let character = response.data.results[0];

        // Fetch Species Name
        if (character.species && character.species.length > 0) { 
            try {
                const speciesResponse = await axios.get(character.species[0]);
                character.species_name = speciesResponse.data.name; // Add species name
            } catch (error) {
                character.species_name = "Unknown"; // Fallback if API call fails
            }
        } else {
            character.species_name = "Human"; // Default for empty species
        }
        // Fetch Films Names
        if (character.films && character.films.length > 0) {
            try {
                const filmsResponses = await Promise.all(character.films.map(url => axios.get(url)));
                character.films = filmsResponses.map(film => film.data.title); // Extract film titles
            } catch (error) {
                character.films = ["Unknown"]; // Fallback if API call fails
            }
        } else {
            character.films = ["Unknown"]; 
        }

        // Fetch Starships Names
        if (character.starships && character.starships.length > 0) {
            try {
                const starshipsResponses = await Promise.all(character.starships.map(url => axios.get(url)));
                character.starships = starshipsResponses.map(starship => starship.data.name); // Extract starship names
            } catch (error) {
                character.starships = ["Unknown"]; // Fallback if API call fails
            }
        } else {
            character.starships = ["Unknown"];
        }

        res.json(character); // Returns the first result as JSON
    } catch (error){
        console.error("API Error:", error.message); //Logs error
        res.status(500).json({ error: error.message}); // error handling 
    }
});

if (process.env.NODE_ENV !== "test") { // starts server when not in testing
    app.listen(PORT, () => {
        console.log(`Gateway API is running on http://localhost:${PORT}`)
    });
}

module.exports = app; // Export app for Jest