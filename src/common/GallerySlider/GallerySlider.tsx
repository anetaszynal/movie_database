import React, { FC } from 'react'
import { Arrow, PageWrapper, Slider, Wrapper } from './styled'

interface Props {
  photos: number, 
  creditsPage: JSX.Element[], 
  slideStart: number, 
  tilesNumber: number, 
  showNext:() => void, 
  showPrevious:() => void
}

export const GallerySlider:FC<Props> = ({ photos, creditsPage, slideStart, tilesNumber, showNext, showPrevious, children }) => {

  return (
    <>
      <Wrapper>
        <Slider hidden = {slideStart === 0}>
          <Arrow onClick = {showPrevious}/>
        </Slider>
        {children}
        <Slider hidden = {photos <= (
          slideStart + tilesNumber
        )} back>
          <Arrow onClick = {showNext} back/>
        </Slider>
      </Wrapper>
      {creditsPage.length > 1 &&(
        <PageWrapper>
          {creditsPage.map(page => page)}
        </PageWrapper>
      )}
    </>
  )
}