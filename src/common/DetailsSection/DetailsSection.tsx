import React, { FC, useState } from 'react'
import { Page } from '../GallerySlider/styled'
import { Title } from '../commonStyles'
import { GallerySlider } from '../GallerySlider'
import { TileList } from '../tilesContainer'
import { MovieCreditsCast, MovieCreditsCrew, PersonCreditsCast, PersonCreditsCrew } from '../../models/credits.model'
import { CommonDetailsSection } from '../types/tile'

interface DetailsSectionProp extends CommonDetailsSection {
  people?: boolean,
  credits: MovieCreditsCast[] | MovieCreditsCrew[] | PersonCreditsCast[] | PersonCreditsCrew[]
}

export const DetailsSection:FC<DetailsSectionProp> = ({tilesNumber, credits, title, people, children}) => {
  const [slideStart, setSlideStart] = useState(0)
  const showNext = () =>  setSlideStart(slideStart + tilesNumber)
  const showPrevious = () => setSlideStart(slideStart - tilesNumber)
  const goTo = (id:number) => setSlideStart(id * tilesNumber )
  const creditsLength = credits?.length
  const creditsPage = new Array(Math.floor(creditsLength / tilesNumber)).fill(undefined).map((_, index) => <Page key = {index} onClick={() => goTo(index)} active={slideStart / tilesNumber === index}/>)

  return !creditsLength 
    ? null
    : (
      <>
        <Title>{title}</Title>
        <GallerySlider photos={creditsLength} creditsPage={creditsPage} tilesNumber={tilesNumber} slideStart={slideStart} showNext={showNext} showPrevious={showPrevious}>
          <TileList people={people}>
            {Array.isArray(children) && children.slice(slideStart, (slideStart + tilesNumber))}
          </TileList>
        </GallerySlider>
      </>
  )
}