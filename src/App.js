import React, { useEffect } from 'react'
import { Tile } from "./Tile";
import { TileList } from "./TileList";
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres, selectGenres } from './app/genre/genreSlice'

function App() {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch])

  return (
      <TileList>
      <Tile/>

      </TileList>
  );
}

export default App;
