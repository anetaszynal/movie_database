import React, { FC } from 'react'
import { Arrow, PageWrapper, Slider, Wrapper } from './styled'

export const GallerySlider:FC<{photos: number, creditsPage: JSX.Element[], slideStart: number, tilesNumber: number, showNext:() => void, showPrevious:() => void}> = ({ photos, creditsPage, slideStart, tilesNumber, showNext, showPrevious, children }) => {
console.log(creditsPage)

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