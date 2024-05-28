<template>
    <div class="mainContainer">
        <div class="searchContainer">
            <h1>Welcome to the Movie Search Website</h1>
            <h2>Use the search bar below to search for a movie.</h2>
            <input v-model.trim="text" @keydown.enter="fetchMovies"/>
            <button @click="fetchMovies" :disabled="text.length === 0">Search</button>
        </div>
        <div class="featuredBlock">
            <TransitionGroup name="movies" appear>
                <Movie v-for="(movie, index) in movies" :movie="movie" :key="movie.movie_id"/>
            </TransitionGroup>
        </div>
    </div>
</template>
  
<script setup>

const text = ref("");
const movies = ref([]);

const fetchMovies = async () => {
    movies.value = [];
    movies.value  = await $fetch(`http://localhost:3001/movies?search=${encodeURI(text.value)}`);
};

</script>

<style scoped>
    div {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    button {
        display: block;
        margin: 10px auto;
        font-family: inherit;
        font-size: 20px;
        width: 10vw;
        height: 30px;
        border: none;
        background-color: lightgray;
        border-radius: 4px;
        cursor: pointer;
    }

    input {
        height: 30px;
        font-size: 20px;
        width: 10vw;
        border: 1px solid black;
        border-radius: 4px;
        padding: 5px;
        box-sizing: border-box;
    }

    .searchContainer {
        margin: auto;
        text-align: center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .featuredBlock {
		display: flex;
		flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 10px;
		justify-content: space-between;
		width: auto;
    }

    /* MOVIES TRANSITION */

    .movies-enter-from {
        opacity: 0;
    }


    .movies-enter-active {
        transition: all 1.0s ease;
    }
</style>