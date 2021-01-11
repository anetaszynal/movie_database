import React from 'react'
import { useSelector } from 'react-redux'
import { selectGenres } from '../../../common/genre/genreSlice'
import { GeneralTile } from '../../../common/Tiles/GeneralTile'
import { getYear, LOCAL_ROUTES } from '../../../lib/utils'
import { getImage, IMAGE_SIZES } from '../../../common/Tiles/getImage'
import noMoviePosterIcon from '../../images/noMoviePosterIcon.svg'
import { StyledNavLink } from '../../../common/commonStyles'
import { DetailsSection } from '../../../common/DetailsSection'

export const MoviesSection = ({ credits, title, role, tilesNumber }) => {
  const genres = useSelector(selectGenres)

  return (
    <DetailsSection credits={credits} title={title} tilesNumber={tilesNumber}>
        {credits?.map((movie) => (
          <StyledNavLink key = {`${movie[role]}-${movie.id}`}
                         to = {`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id)}`}>
            <GeneralTile image = {getImage({ path: movie.poster_path, size: IMAGE_SIZES.medium })}
                         imagePlaceholder = {noMoviePosterIcon}
                         genres = {movie.genre_ids?.map((id) => genres[id])}
                         title = {movie.title}
                         caption = {`${movie[role]} (${getYear(movie.release_date)})`}
                         averageVotes = {movie.vote_average}
                         votes = {movie.vote_count}/>
          </StyledNavLink>
        ))}
      </DetailsSection>
  )
}
