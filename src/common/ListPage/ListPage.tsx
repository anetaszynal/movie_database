import React, { FC } from 'react'
import { Page } from '../Page'
import { Pagination } from './Pagination'
import { TileList } from '../tilesContainer'
import { NoResults } from './NoResult'
import { STATUS } from '../../lib/utils'

interface Props {
  title: string,
  status: STATUS,
  page: number,
  totalPages: number,
  people?: boolean,
  query: string | undefined,
  noResults: boolean
}

export const ListPage:FC<Props> = ({
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
