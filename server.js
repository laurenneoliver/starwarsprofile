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

        res.json(response.data.results[0]); // Returns the first result as JSON
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
console.log("Axios Loaded Version:", require("axios").VERSION); // ✅ Log Axios version

module.exports = app; // Export app for Jest