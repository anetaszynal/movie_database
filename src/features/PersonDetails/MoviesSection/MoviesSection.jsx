import React from 'react'
import { useSelector } from 'react-redux'
import { selectGenres } from '../../../common/genre/genreSlice'
import { GeneralTile } from '../../../common/Tiles/GeneralTile'
import { getYear, LOCAL_ROUTES } from '../../../lib/utils'
import { getImage } from '../../../common/Tiles/getImage'
import noMoviePosterIcon from '../../images/noMoviePosterIcon.svg'
import { StyledNavLink, Title } from '../../../common/commonStyles'
import { TileList } from '../../../common/tilesContainer'

export const MoviesSection = ({ credits, title, role }) => {
  const genres = useSelector(selectGenres)
  const creditsLength = credits?.length

  return (
    creditsLength > 0 &&
    <>
      <Title>{`Movies - ${title} (${creditsLength}) `}</Title>
      <TileList>
        {credits?.map((movie) => (
          <StyledNavLink key = {`${movie[role]}-${movie.id}`}
                         to = {`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id)}`}>
            <GeneralTile image = {getImage({ path: movie.poster_path, size: 'medium' })}
                         imagePlaceholder = {noMoviePosterIcon}
                         genres = {movie.genre_ids?.map((id) => genres[id])}
                         title = {movie.title}
                         caption = {`${movie[role]} (${getYear(movie.release_date)})`}
                         averageVotes = {movie.vote_average}
                         votes = {movie.vote_count}/>
          </StyledNavLink>
        ))}
      </TileList>
    </>
  )
}
