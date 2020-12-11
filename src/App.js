import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { fetchGenres } from './app/genre/genreSlice'
import { MoviesPage } from './app/Movies'
import { Header } from './app/Header'
import { PeoplePage } from './app/People'
import { MovieDetails } from './app/MovieDetails'
import { LOCAL_ROUTES } from './lib/utils'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path = {LOCAL_ROUTES.movieDetails(':id')}>
          <MovieDetails/>
        </Route>
        <Route path = {LOCAL_ROUTES.movies}>
          <MoviesPage/>
        </Route>
        <Route path = {LOCAL_ROUTES.people}>
          <PeoplePage/>
        </Route>
        <Route>
          <Redirect to = {LOCAL_ROUTES.movies}/>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
