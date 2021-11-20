import React, { FC, useMemo, useState } from 'react'
import { useHowMuchWords } from './useHowMuchWords'
import { ButtonTextVisibility } from './styled'

export const Description:FC<{text: string}> = ({ text }) => {
  const textWord = text.split(' ')
  const howMuchWords = useHowMuchWords()
  const isTextLongOne = useMemo(() => textWord.length > howMuchWords, [textWord.length, howMuchWords])
  const [cutText, setCutText] = useState(isTextLongOne)

  const renderTruncatedText = () => (
    <>
      {textWord.slice(0, howMuchWords).join(' ')}
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


