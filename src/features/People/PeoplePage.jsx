import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchDataOnChange } from '../useFetchDataOnChange'
import { useClearDataOnLeave } from '../useClearDataOnLeave'
import { actions, selectors } from './peopleSlice'
import { ListPage } from '../../common/ListPage'
import { GeneralTile } from '../../common/Tiles/GeneralTile'
import { LOCAL_ROUTES } from '../../lib/utils'
import { getImage } from '../../common/Tiles/getImage'
import noPersonPosterIcon from '../images/noPersonPosterIcon.svg'
import { StyledNavLink } from '../../common/commonStyles'

export const PeoplePage = () => {
  const people = useSelector(selectors.selectResults)
  const status = useSelector(selectors.selectStatus)
  const pagination = useSelector(selectors.selectPagination)
  const query = useSelector(selectors.selectQuery)
  const noResults = useSelector(selectors.selectResultsEmpty)

  useFetchDataOnChange({ fetchAction: actions.fetch })

  useClearDataOnLeave({ clearAction: actions.clearAction })

  return (
    <ListPage people
              title = {
                query ? (
                  <>
                    {noResults ? 'Sorry, there are no ' : 'Search '} results for <q>{query}</q>
                    {pagination?.totalResults > 0 && ` (${pagination.totalResults})`}
                  </>
                ) : (
                  'Popular People'
                )
              }
              query = {query}
              noResults = {noResults}
              status = {status}
              page = {pagination?.page}
              totalPages = {pagination?.totalPages}>
      {people?.map((person) => (
        <StyledNavLink key = {person.id} to = {`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(person.id)}`}>
          <GeneralTile image = {getImage({ path: person.profile_path, size: 'medium' })}
                       imagePlaceholder = {noPersonPosterIcon}
                       title = {person.name}
                       people/>
        </StyledNavLink>
      ))}
    </ListPage>
  )
}
