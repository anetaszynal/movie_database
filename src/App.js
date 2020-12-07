import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGenres } from './app/genre/genreSlice'
import { MoviesPage } from './app/Movies/MoviesPage'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <MoviesPage/>
  )
}

export default App
