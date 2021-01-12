import React from 'react'
import { Arrow, PageWrapper, Slider, Wrapper } from './styled'

export const GallerySlider = ({ photos, creditsPage, slideStart, tilesNumber, showNext, showPrevious, children }) => {


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