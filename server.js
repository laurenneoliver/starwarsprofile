const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3000;
const BASE_URL = 'https://swapi.dev/api/people/'; //SWAPI endpoint

app.use(express.json());
app.use(cors()); 

app.get('/api/people', async (req, res) => {
    try {
        const { search } = req.query; // stores search parameter
        const response = await axios.get(`${BASE_URL}?search=${search}`); // sends get request with search as query parameter
        
        if (response.data.count === 0) {
            return res.status(404).json({ message: `${search} was not found` }); // error handling 
        }

        res.json(response.data.results[0]); // Returns the first result as JSON
    } catch (error){
        res.status(500).json({ error: error.message}); // error handling 
    }
});

app.listen(PORT, () => {
    console.log(`Gateway API is running on http://localhost:${PORT}`) //Express server
})