import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, selectors } from './topRatedMoviesSlice'
import { selectGenres } from '../genre/genreSlice'
import { Tile } from '../Tile'
import { getYear } from '../../lib/utils'
import { ListPage } from '../topRatedList/ListPage'

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectors.selectResults)
  const status = useSelector(selectors.selectStatus)
  const pagination = useSelector(selectors.selectPagination)
  const genres = useSelector(selectGenres)

  useEffect(() => {
    dispatch(actions.fetch({ page: 1 }))

  }, [dispatch])

  return (
    <ListPage
      title ="Top rated Movies"
      status = {status}
      children = {movies?.map(movie => (
        <Tile key = {movie.id}
              url = {movie.poster_path}
              genres = {movie?.genre_ids.map(id => genres[id])}
              title = {movie.title}
              caption = {getYear(movie.release_date)}
              averageVotes = {movie.vote_average}
              votes = {movie.vote_count}
        />
      ))}
      page={pagination?.page}
      totalPages={pagination?.totalPages}
      />
  )
}