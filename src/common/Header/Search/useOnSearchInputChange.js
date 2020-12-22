import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { buildQueryString } from '../../buildQueryString'
import { LOCAL_ROUTES } from '../../../lib/utils'

export const useOnSearchInputChange = setInputValue => {
  const timeoutRef = useRef()
  const history = useHistory()

  return ({ newValue, isSearchForPeople }) => {
    clearTimeout(timeoutRef.current)
    setInputValue(newValue)

    timeoutRef.current = setTimeout(() => {
      history.push({
        pathname: isSearchForPeople ? LOCAL_ROUTES.people : LOCAL_ROUTES.movies,
        search: buildQueryString({ query: newValue || undefined }),
      })
    }, 200)
  }
}