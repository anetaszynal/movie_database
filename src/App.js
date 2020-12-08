import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGenres } from './app/genre/genreSlice'
import { MoviesPage } from './app/Movies/MoviesPage'
import { Pagination } from './app/Pagination/Pagination'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <>
    <MoviesPage/>
      <Pagination/>
      </>
  )
}

export default App
