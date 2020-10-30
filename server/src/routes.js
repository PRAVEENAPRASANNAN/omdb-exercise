const express = require('express');
const router = express.Router;
const Movie =  require('./models/Movie');

module.exports = function (){
    router.get('/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({ title: searchValue });
        return res.send(moviesData);
    });
    return router;
};