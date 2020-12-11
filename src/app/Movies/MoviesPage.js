import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchDataOnChange } from '../useFetchDataOnChange'
import { actions, selectors } from './topRatedMoviesSlice'
import { selectGenres } from '../genre/genreSlice'
import { Tile } from '../Tile'
import { getYear } from '../../lib/utils'
import { ListPage } from '../topRatedList/ListPage'

export const MoviesPage = () => {
  const movies = useSelector(selectors.selectResults)
  const status = useSelector(selectors.selectStatus)
  const pagination = useSelector(selectors.selectPagination)
  const genres = useSelector(selectGenres)

  useFetchDataOnChange({ fetchAction: actions.fetch })

  return (
    <ListPage title = "Top rated Movies"
              status = {status}
              page = {pagination?.page}
              totalPages = {pagination?.totalPages}>
      {movies?.map(movie => (
        <Tile key = {movie.id}
              url = {movie.poster_path}
              genres = {movie?.genre_ids.map(id => genres[id])}
              title = {movie.title}
              caption = {getYear(movie.release_date)}
              averageVotes = {movie.vote_average}
              votes = {movie.vote_count}/>
      ))}
    </ListPage>
  )
}