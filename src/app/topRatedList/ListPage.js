import { Container, TileList, Title } from '../TileList'
import React from 'react'
import { Pagination } from '../Pagination'
import { STATUS } from '../../lib/utils'

export const ListPage = ({ children, title, status, page, totalPages, people }) => (
  status === STATUS.success && (
    <>
      <Container>
        <Title>{title}</Title>
        <TileList people={people}>
          {children}
        </TileList>
      </Container>
      <Pagination page = {page} totalPages = {totalPages}/>
    </>
  )
)