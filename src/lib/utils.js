export const getYear = (date) => {
  return date.split('-')[0]
}

export const APP_ROUTES = {
  genres: '/genre/movie/list',
  movies: '/movie/top_rated',
  searchMovies: '/search/movie',
  people: '/person/popular',
  searchPeople: '/search/person',
  movieDetails: '/movie/',
  movieCredits: '/credits',
  personDetails: '/person/',
  personCredits: '/movie_credits'
}

export const LOCAL_ROUTES = {
  movies: '/movies',
  people: '/people',
  movieDetails: (id) => `/movie/${id}`,
  personDetails: (id) => `/person/${id}`
}

export const STATUS = {
  initial: 'initial',
  success: 'success',
  loading: 'loading',
  error: 'error'
}