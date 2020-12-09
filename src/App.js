import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import { fetchGenres } from './app/genre/genreSlice'
import { MoviesPage } from './app/Movies/MoviesPage'
import { Header } from './app/Header'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route path={"/movies"}>
          <MoviesPage/>
        </Route>
        <Route>
          <Redirect to={"/movies"}/>
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App
