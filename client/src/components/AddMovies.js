import React, { useEffect } from 'react';
import axios from 'axios';
export default function AddMovies() {

    useEffect(() => {
    addMovies();
    }, []);

    async function addMovies() {
        console.log("adding a movie")
        const body = {poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",title:"Iron Man",type:"Movie",year:"2008"};
        const result = await axios.post("http://localhost:5000/addMovies",body)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }
    return (<h1>Adding a movie</h1>);
}