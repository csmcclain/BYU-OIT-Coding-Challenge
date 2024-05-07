require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/movies', async (req, res) => {

    let movie_title = req.query['search'];
    if (movie_title == "") {
        res.status(400);
        res.send('Error: Please include a title in your request.')
    }

    let url = `https://api.themoviedb.org/3/search/movie?query=${movie_title}&include_adult=false&language=en-US&region=US`;
    let response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    });

    if (299 <= response.status) {
        res.status(500);
        res.send('An internal server error has occurred. Please contact the web administrator for more details.');
        return;
    }

    let response_arr = [];
    response.data.results.slice(0, 10).forEach((movie) => {
        respObj = {
            'movie_id': movie.id,
            'title': movie.original_title,
            'poster_image_url': `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            'popularity_summary': `${movie.vote_average} out of ${movie.vote_count}.`,
        };
        response_arr.push(respObj);
    });
    
    res.send(response_arr);
});


app.listen(3000, () => console.log('Backend is not listening on port 3000.'));