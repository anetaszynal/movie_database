import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { fetchGenres } from './common/genre/genreSlice'
import { MoviesPage } from './features/Movies'
import { Header } from './common/Header'
import { PeoplePage } from './features/People'
import { MovieDetails } from './features/MovieDetails'
import { LOCAL_ROUTES } from './lib/utils'
import { PersonDetailsPage } from './features/PersonDetails'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path = {`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(':id')}`}>
          <MovieDetails/>
        </Route>
        <Route path = {`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(':id')}`}>
          <PersonDetailsPage/>
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
