

const API_KEY = '15db49b48da5419c313d01abe0998bc7';

export const load = async () => {
    const fetchPopularMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const popularMoviesData = await res.json()
    return popularMoviesData.results
    }

    return {
        popularMovies: fetchPopularMovies()
    }
}
     