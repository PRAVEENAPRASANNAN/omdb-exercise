const express = require('express');
const router = express.Router();
const Movie = require('./models/Movie');

module.exports = function () {
    router.get('/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({ title: searchValue });
        return res.send(moviesData);
    });

    router.post('/addMovies', async (req, res) => {
        console.log("hello");
        console.log(req.body);
        const {poster,title,type,year} = req.body;
        const movie = new Movie({
            poster,
            title,
            type,
            year
        });
    await movie.save();
    res.json({ message: "Movie added successfully" });
    });
    return router;
};