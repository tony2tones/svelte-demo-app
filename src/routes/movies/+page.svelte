<script>
    export let data;
    const {popularMovies} = data;
</script>

<p>Movies page</p>
{#each popularMovies as movie }
    <h2>{movie.original_title}</h2>
    <p>{movie.overview}</p>
{/each}