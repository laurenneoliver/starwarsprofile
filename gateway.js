const express = require("express");
const app = express();
const PORT = 3000

app.use(express.json());

app.listen(PORT, () => {
    console.log("Gateway has started on PORT: " + PORT);
})