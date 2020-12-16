import React from 'react'
import { Page } from '../Page'
import { Pagination } from './Pagination'
import { TileList } from '../tilesContainer'
import { NoResults } from './NoResult'

export const ListPage = ({
  children,
  title,
  status,
  page,
  totalPages,
  people,
  query,
  noResults
}) => (
  <Page title = {title} status = {status}>
    {query && noResults ?
      <NoResults/>
      :
      <>
        <TileList people = {people}>{children}</TileList>
        <Pagination page = {page} totalPages = {totalPages}/>
      </>
    }
  </Page>
)
