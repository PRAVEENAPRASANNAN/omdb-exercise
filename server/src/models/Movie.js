const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    poster : String,
    title : String,
    type  : String,
    year : String 
},{
    collection:"movie_data"
})

const Movie = mongoose.model('Movie',schema);
module.exports = Movie;