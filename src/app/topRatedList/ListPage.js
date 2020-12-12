import { TileList, Title } from '../tileList'
import React from 'react'
import { Pagination } from '../Pagination'
import { STATUS } from '../../lib/utils'
import { Container } from '../common/commonStyles'

export const ListPage = ({ children, title, status, page, totalPages, people }) => (
  status === STATUS.success && (
    <>
      <Container>
        <Title>{title}</Title>
        <TileList people = {people}>
          {children}
        </TileList>
      </Container>
      <Pagination page = {page} totalPages = {totalPages}/>
    </>
  )
)