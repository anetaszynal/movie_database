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
        page = {pagination?.page}
        totalPages = {pagination?.totalPages}
      >
        {people?.map(person => (
          <Tile
            key={person.id}
            url = {person.profile_path}
            title = {person.name}
            people
          />
        ))}
      </ListPage>
  )
}