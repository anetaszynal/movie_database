import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, selectors } from './movieDetailsSlice'
import { useParams } from 'react-router'
import { Tile } from '../Tile'
import { getFullDate, getYear, STATUS } from '../../lib/utils'
import { selectGenres } from '../genre/genreSlice'

export const MovieDetails = () => {
  const details = useSelector(selectors.selectDetails)
  const cast = useSelector(selectors.selectCast)
  const crew = useSelector(selectors.selectCrew)
  const status = useSelector(selectors.selectStatus)
  const dispatch = useDispatch()
  const { id } = useParams()
  const genres = useSelector(selectGenres)

  useEffect(() => {
    dispatch(actions.fetch(id))
  }, [dispatch, id, actions])

  return (
    status === STATUS.success && (
      <Tile
        url={details.poster_path}
        title = {details.title}
        caption={getYear(details.release_date)}
        production={details.production_countries?.map(({name}) => name)}
        date={getFullDate(details.release_date)}
        genres = {details.genres?.map(({name}) => name)}
      />
    )
  )
}