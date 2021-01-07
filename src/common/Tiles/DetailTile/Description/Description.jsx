import React, { useEffect, useMemo, useState } from 'react'
import { ButtonTextVisibility } from './styled'

export const Description = ({ text }) => {
  const isTextLongOne = useMemo(() => text?.length > 700, [text])
  const [cutText, setCutText] = useState(isTextLongOne)

  const howMuchWords = () => {
    const screenWidth = window.innerWidth
    if(screenWidth > 787){
     return Math.floor((Math.min(screenWidth, 1400) - (16 * 2 + 64 * 3 + 310)) / 6)
    }
    else {
      return Math.floor((screenWidth - 64) / 10)
    }
  }

  const renderTruncatedText = () => (
    <>
      {text.split(' ').slice(0, howMuchWords()).join(' ')}
      <ButtonTextVisibility onClick = {() => setCutText(false)}>{'...read more'}</ButtonTextVisibility>
    </>
  )

  const renderFullText = () => (
    <>
      {text}
      {isTextLongOne && <ButtonTextVisibility onClick = {() => setCutText(true)}>{'read less'}</ButtonTextVisibility>}
    </>
  )

  return cutText ? renderTruncatedText() : renderFullText()
}


