import React, { useMemo, useState } from 'react'

export const DisplayDescription = ({ text }) => {
  const isTextLongOne = useMemo(() => text?.length > 700, [text])
  const [cutText, setCutText] = useState(isTextLongOne)

  const renderTruncatedText = () => (
    <>
      {text.split(' ').slice(0, 100).join(' ')}
      <button onClick = {() => setCutText(false)}>{'...read more'}</button>
      </>
  )

  const renderFullText = () => (
    <>
      {text}
      {isTextLongOne && <button onClick = {() => setCutText(true)}>{'read less'}</button>}
    </>
  )

  return cutText ? renderTruncatedText() : renderFullText()
}


