<template>
    <div>
        <h1>Welcome to the Movie Search Website</h1>
        <h2>Use the search bar below to search for a movie.</h2>
        <h3>Yes this is a very basic website...</h3>
        <input v-model="text"/>
        <button @click="refresh()">Search</button>
        <div class="featuredBlock">
            <div v-for="movie in movies">
                <Movie :movie="movie" :key="movie._id"/>
            </div>
        </div>


    </div>
</template>
  
<script setup>
import { ref } from 'vue';

let text = ref("");
let url = `http://localhost:3001/movies?search=tron`;

const {pending, data: movies} = await useLazyFetch(url, {server: false});
watch(movies, (newMovies) => {
    console.log(newMovies);
})

async function refresh() {
    await refreshNuxtData();
}

</script>

<style>
    .featuredBlock {
		display: flex;
		flex-wrap: wrap;
		row-gap: 30px;
		column-gap: 40px;
		justify-content: space-between;
		width: auto;
	}
</style>