import React, { useMemo, useState } from 'react'
import {ButtonTextVisibility} from './styled'

export const Description = ({ text }) => {
  const isTextLongOne = useMemo(() => text?.length > 700, [text])
  const [cutText, setCutText] = useState(isTextLongOne)

  const renderTruncatedText = () => (
    <>
      {text.split(' ').slice(0, 100).join(' ')}
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


