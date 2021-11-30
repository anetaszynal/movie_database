import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchDataOnChange } from '../useFetchDataOnChange'
import { useClearDataOnLeave } from '../useClearDataOnLeave'
import { actions, selectors } from './topRatedMoviesSlice'
import { selectGenres } from '../../common/genre/genreSlice'
import { GeneralTile } from '../../common/Tiles/GeneralTile'
import { ListPage } from '../../common/ListPage'
import { getYear, LOCAL_ROUTES } from '../../lib/utils'
import { getImage, IMAGE_SIZES } from '../../common/Tiles/getImage'
import noMoviePosterIcon from '../images/noMoviePosterIcon.svg'
import { StyledNavLink } from '../../common/commonStyles'
import { MoviesBasicInformation } from '../../models/movie.model'

export const MoviesPage = () => {
  const movies = useSelector(selectors.selectResults) as MoviesBasicInformation[]
  const status = useSelector(selectors.selectStatus)
  const pagination = useSelector(selectors.selectPagination)
  const genres = useSelector(selectGenres)
  const query = useSelector(selectors.selectQuery)
  const noResults = useSelector(selectors.selectResultsEmpty)

  useFetchDataOnChange({ fetchAction: actions.fetch })

  useClearDataOnLeave({ clearAction: actions.clearAction })

  return (
    <ListPage title = {
      query ? (
        <>
          {noResults ? 'Sorry, there are no ' : 'Search '}
          results for <q>{query}</q>
          {pagination?.totalResults > 0 && ` (${pagination.totalResults})`}
        </>
      ) : (
        'Top rated Movies'
      )
    }
              status = {status}
              query = {query}
              noResults = {noResults}
              page = {pagination?.page}
              totalPages = {pagination?.totalPages}>
      {movies?.map((movie) => (
        <StyledNavLink key = {movie.id} to = {`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id.toString())}`}>
          <GeneralTile image = {getImage({ path: movie.poster_path, size: IMAGE_SIZES.medium })}
                       imagePlaceholder = {noMoviePosterIcon}
                       genres = {movie?.genre_ids.map((id) => genres[id])}
                       title = {movie.title}
                       caption = {getYear(movie.release_date)}
                       averageVotes = {movie.vote_average}
                       votes = {movie.vote_count}/>
        </StyledNavLink>
      ))}
    </ListPage>
  )
}
