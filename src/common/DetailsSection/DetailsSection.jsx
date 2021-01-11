import React, { useState } from 'react'
import { Page } from '../GallerySlider/styled'
import { Title } from '../commonStyles'
import { GallerySlider } from '../GallerySlider'
import { TileList } from '../tilesContainer'

export const DetailsSection = ({tilesNumber, credits, title, people, children}) => {
  const [slideStart, setSlideStart] = useState(0)
  const showNext = () =>  setSlideStart(slideStart + tilesNumber)
  const showPrevious = () => setSlideStart(slideStart - tilesNumber)
  const goTo = (id) => setSlideStart(id * tilesNumber )
  const creditsLength = credits?.length
  const creditsPage = []

  for (let i = 0; i < (Math.ceil(creditsLength / tilesNumber)); i++)
  {
    creditsPage.push(<Page key = {i} onClick={() => goTo(i)} active={slideStart / tilesNumber === i}/>)
  }

  return(
    creditsLength > 0 && (
      <>
        <Title>{title}</Title>
        <GallerySlider photos={creditsLength} creditsPage={creditsPage} tilesNumber={tilesNumber} slideStart={slideStart} showNext={showNext} showPrevious={showPrevious}>
          <TileList people={people}>
            {children.slice(slideStart, (slideStart + tilesNumber))}
          </TileList>
        </GallerySlider>
      </>
    )
  )
}