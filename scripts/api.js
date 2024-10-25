const movieTitle = document.querySelector('.movie-title');
const releaseDate = document.querySelector('.release-date');
const movieGenres = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');
const yearToShow = document.querySelectorAll('.year');

window.onload = () => {
  let url = 'https://api.themoviedb.org/3/movie/128135?api_key=5685f5b51423c152c2978da0d4724583';

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      movieTitle.textContent = data.title;
      let date = new Date(data.release_date);
      releaseDate.textContent = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
      movieDuration.textContent = `${data.runtime} min`;
      movieQuote.textContent = data.tagline;
      movieOverview.textContent = data.overview;
      let posterurl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
      moviePoster.src = posterurl;
      moviePoster.alt = `${data.title} poster`;
      let genresTodisplay = '';
      data.genres.forEach(genre => {
        genresTodisplay = genresTodisplay + `${genre.name}, `
        let genresUpdated = genresTodisplay.slice(0, -2 + '.');
        movieGenres.textContent = genresUpdated;
        let currentYear = new Date().getFullYear();
        yearToShow.textContent = currentYear;
});

    }
     )
}

