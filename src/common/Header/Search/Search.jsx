import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useOnSearchInputChange } from './useOnSearchInputChange'
import { Input } from './styled'

export const Search = () => {
  const location = useLocation()
  const queryInUrl = new URLSearchParams(location.search).get('query') || ''

  const [searchedValue, setSearchedValue] = useState('')

  const onSearchInputChange = useOnSearchInputChange(setSearchedValue)
  const isSearchForPeople = location.pathname.includes('/people')

  useEffect(() => {
    setSearchedValue(queryInUrl)
  }, [queryInUrl])

  return (
    <Input value = {searchedValue} placeholder = {`Search for ${
      location.pathname.includes('/people') ? 'people' : 'movies'
    }...`} onChange = {({ target: { value } }) =>
      onSearchInputChange({ newValue: value, isSearchForPeople })
    }/>
  )
}
