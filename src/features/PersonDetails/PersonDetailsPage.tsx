import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useClearDataOnLeave } from '../useClearDataOnLeave'
import { actions, selectors } from './personDetailsSlice'
import { DetailsPage } from '../../common/DetailsPage'
import { DetailTile } from '../../common/Tiles/DetailTile'
import { MoviesSection } from './MoviesSection'
import { getFullDate } from '../../lib/utils'
import { getImage, IMAGE_SIZES } from '../../common/Tiles/getImage'
import noPersonPosterIcon from '../images/noPersonPosterIcon.svg'
import { useHowMuchMovieTiles } from './useHowMuchMovieTiles'

export const PersonDetailsPage = () => {
  const dispatch = useDispatch()
  const person = useSelector(selectors.selectDetails)
  const cast = useSelector(selectors.selectCast)
  const crew = useSelector(selectors.selectCrew)
  const status = useSelector(selectors.selectStatus)
  const tilesNumber = useHowMuchMovieTiles()

  const { id } = useParams<{id:string}>()

  useEffect(() => {
    dispatch(actions.fetch(id))
  }, [id, dispatch])

  useClearDataOnLeave({ clearAction: actions.clearAction })

  return (
    <DetailsPage status = {status}>
      {person && <DetailTile people
                  detail
                  image = {getImage({ path: person.profile_path, size: IMAGE_SIZES.medium })}
                  imagePlaceholder = {noPersonPosterIcon}
                  title = {person.name}
                  firstInfoName = "Date of birth:"
                  secondInfoName = "Place of birth"
                  firstInfo = {getFullDate(person.birthday)}
                  secondInfo = {person.place_of_birth}
                  description = {person.biography}/>}
      <MoviesSection title = {`Movies - cast (${cast?.length}) `} credits = {cast} role = {'character'} tilesNumber={tilesNumber}/>
      <MoviesSection title = {`Movies - crew (${crew?.length}) `} credits = {crew} role = {'job'} tilesNumber={tilesNumber}/>
    </DetailsPage>
  )
}

