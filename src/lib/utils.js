export const getYear = (date) => {
  return date.split("-")[0]
}

export const APP_ROUTES = {
  genres: '/genre/movie/list',
  movies: '/movie/top_rated',
  searchMovies: '/search/movie',
  people: '/person/popular',
  searchPeople: '/search/person',
}

export const LOCAL_ROUTES = {
  movies: '/movies',
  people: '/people'
}