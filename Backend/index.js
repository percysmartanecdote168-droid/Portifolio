const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // This is crucial—it allows React to talk to Node

app.get('/', (req, res) => {
    res.send("Hello from the backend!");
});

app.listen(5000, () => {
    console.log("Backend is running on http://localhost:5000");
});