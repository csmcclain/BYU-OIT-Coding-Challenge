require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    res.sendStatus(200);
});

app.get('/movies', async (req, res) => {

    let movie_title = req.query['search'];
    if (movie_title === "" || movie_title === undefined) {
        res.status(400);
        res.send('Error: Please include a title in your request.')
        return;
    }

    let url = `https://api.themoviedb.org/3/search/movie?query=${movie_title}&include_adult=false&language=en-US&region=US`;
    let response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    });

    if (299 < response.status) {
        res.status(500);
        res.send('An internal server error has occurred. Please contact the web administrator for more details.');
        return;
    }

    let response_arr = [];
    response.data.results.slice(0, 10).forEach((movie) => {
        response_arr.push({
            'movie_id': movie.id,
            'title': movie.original_title,
            'poster_image_url': `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            'popularity_summary': `${movie.vote_average} out of ${movie.vote_count}.`,
        });
    });
    
    // the following line is only for this project and SHOULD NOT be used in production
    res.header("Access-Control-Allow-Origin", "*");
    res.send(response_arr);
});

app.listen(3001, () => console.log('Backend is now listening on port 3001.'));