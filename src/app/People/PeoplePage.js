import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchDataOnChange } from '../useFetchDataOnChange'
import { actions, selectors } from './peopleSlice'
import { ListPage } from '../topRatedList/ListPage'
import { Tile } from '../Tile'

export const PeoplePage = () => {
  const people = useSelector(selectors.selectResults)
  const status = useSelector(selectors.selectStatus)
  const pagination = useSelector(selectors.selectPagination)

  useFetchDataOnChange({ fetchAction: actions.fetch })

  return (
      <ListPage
        people
        title = 'Popular People'
        status = {status}
        children = {people?.map(person => (
          <Tile
            url = {person.profile_path}
            title = {person.name}
            people
          />
      ))}
        page = {pagination?.page}
        totalPages = {pagination?.totalPages}/>
  )
}