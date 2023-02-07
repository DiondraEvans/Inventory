const express = require('express');
require('dotenv').config()
const axios = require('axios');
const path = require('path')
const cors = require('cors')
const app = express();

// console.log(process.env.API_KEY);
app.use(cors('*/*'))
//serve the react app from server
//the local is dependednt on your sever location. build is outside in the same folder server.js is in
app.use(express.static(path.join(__dirname, 'build')))
app.get('/get_movie/:movieString', async (req, res) => {
    console.log(req.params.movieString);

    // call API
    let apiResponse = await axios(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    const data = apiResponse.data;
    console.log(data);
    res.json(data);
});


app.listen(5000, () => {
    console.log(`Server is Listening on 5000`);
});