import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, selectors } from './topRatedMoviesSlice'
import { selectGenres } from '../genre/genreSlice'
import { Tile } from '../../Tile'
import { TileList, Title, Container } from '../../TileList'
import { getYear } from '../../lib/utils'

export const MoviesPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectors.selectResults)
  const status = useSelector(selectors.selectStatus)
  const genres = useSelector(selectGenres)

  useEffect(() => {
    dispatch(actions.fetch({ page: 1 }))

  }, [dispatch])

  return (
    status === 'success' && (
      <Container>
        <Title>Top rated Movies</Title>
        <TileList>
          {movies?.map(movie => (
            <Tile key = {movie.id}
                  url = {movie.poster_path}
                  genres = {movie.genre_ids.map(id => genres[id])}
                  title = {movie.title}
                  caption = {getYear(movie.release_date)}
                  averageVotes = {movie.vote_average}
                  votes = {movie.vote_count}/>
          ))}
        </TileList>
      </Container>
    )
  )
}