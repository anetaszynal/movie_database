export const getYear = (date) => {
  return date?.split("-")[0];
};

export const getFullDate = (date) => {
  return date?.split("-").reverse().join(".").replace(/"-"/g, ".");
};

export const APP_ROUTES = {
  API: "https://api.themoviedb.org/3/",
  genres: "genre/movie/list",
  movies: "movie/top_rated",
  searchMovies: "search/movie",
  people: "person/popular",
  searchPeople: "search/person",
  movieDetails: "movie",
  movieCredits: "credits",
  personDetails: "person",
  personCredits: "movie_credits",
  image: "https://image.tmdb.org/t/p/w500",
};

export const LOCAL_ROUTES = {
  movies: "/movies",
  people: "/people",
  details: (id) => `/details/${id}`,
};

export const STATUS = {
  initial: "initial",
  success: "success",
  loading: "loading",
  error: "error",
};
