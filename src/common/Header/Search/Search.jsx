import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useOnSearchInputChange } from './useOnSearchInputChange'
import { Input } from './styled'
import { LOCAL_ROUTES } from '../../../lib/utils'

export const Search = () => {
  const location = useLocation()
  const queryInUrl = new URLSearchParams(location.search).get('query') || ''

  const [searchedValue, setSearchedValue] = useState('')

  const onSearchInputChange = useOnSearchInputChange(setSearchedValue)
  const isSearchForPeople = location.pathname.includes(LOCAL_ROUTES.people)

  useEffect(() => {
    setSearchedValue(queryInUrl)
  }, [queryInUrl])

  return (
    <Input value = {searchedValue} placeholder = {`Search for ${
      isSearchForPeople ? 'people' : 'movies'
    }...`} onChange = {({ target: { value } }) =>
      onSearchInputChange({ newValue: value, isSearchForPeople })
    }/>
  )
}
