import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectGenres } from '../../../common/genre/genreSlice'
import { GeneralTile } from '../../../common/Tiles/GeneralTile'
import { getYear, LOCAL_ROUTES } from '../../../lib/utils'
import { getImage, IMAGE_SIZES } from '../../../common/Tiles/getImage'
import noMoviePosterIcon from '../../images/noMoviePosterIcon.svg'
import { StyledNavLink } from '../../../common/commonStyles'
import { DetailsSection } from '../../../common/DetailsSection'
import { PersonCreditsCast, PersonCreditsCrew } from '../../../models/credits.model'

const isCreditsCrewType = (credits: PersonCreditsCast | PersonCreditsCrew): credits is PersonCreditsCrew => {
  return 'job' in credits
}

export const MoviesSection:FC<{credits: PersonCreditsCast[] | PersonCreditsCrew[], title: string, role: 'character' | 'job', tilesNumber: number}> = ({ credits, title, role, tilesNumber }) => {
  const genres = useSelector(selectGenres)

  return (
    <DetailsSection credits={credits} title={title} tilesNumber={tilesNumber}>
        {credits?.map((movie) => (
          <StyledNavLink key = {`${isCreditsCrewType(movie) ? `${movie.job}-${movie.id}` : `${movie.character}-${movie.id}`}`}
                         to = {`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id.toString())}`}>
            <GeneralTile image = {getImage({ path: movie.poster_path, size: IMAGE_SIZES.medium })}
                         imagePlaceholder = {noMoviePosterIcon}
                         genres = {genres ? movie.genre_ids?.map((id) => genres[id]) : undefined}
                         title = {movie.title}
                         caption = {`${isCreditsCrewType(movie) ? movie.job : movie.character} (${getYear(movie.release_date)})`}
                         averageVotes = {movie.vote_average}
                         votes = {movie.vote_count}/>
          </StyledNavLink>
        ))}
      </DetailsSection>
  )
}
